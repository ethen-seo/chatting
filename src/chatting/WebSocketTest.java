package chatting;

import java.io.IOException;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/tttSocket")
public class WebSocketTest {
	
	 private static final String GUEST_PREFIX = "Guest";
	    // AtomicInteger Ŭ������ getAndIncrement()�� ȣ���� ������ ī���͸� 1�� �����ϴ� ����� ������ �ִ�
	    private static final AtomicInteger connectionIds = new AtomicInteger(0);
	    // CopyOnWriteArraySet �� ����ϸ� �÷��ǿ� ����� ��ü�� ���� �����ϰ� ������ �� �ִ�
	    // ���� ���, toArray()�޼ҵ带 ���� ���� Object[] ���� �����͸� ������ �� �ִ�.
	    private static final Set<WebSocketTest> connections =
	            new CopyOnWriteArraySet<WebSocketTest>();

	    private final String nickname;
	    // Ŭ���̾�Ʈ�� ���� ������ ������ �Ѱ��� Session ��ü�� �����ȴ�.
	    // Session ��ü�� �÷��ǿ� �����Ͽ� �ΰ� �ش� Ŭ���̾�Ʈ���� �����͸� ������ ������ ����Ѵ�
	    private Session session;

	    public WebSocketTest() {
	    	// Ŭ���̾�Ʈ�� ������ ������ ������������ Thread �� ���� �����Ǵ� ���� Ȯ���� �� �ִ�
	    	String threadName = "Thread-Name:"+Thread.currentThread().getName();
	    	// getAndIncrement()�� ī��Ʈ�� 1 �����ϰ� ������ ���ڸ� �����Ѵ�
	        nickname = GUEST_PREFIX + connectionIds.getAndIncrement();
	        System.out.println(threadName+", "+nickname);
	    }


	    @OnOpen
	    public void start(Session session) {
	    	System.out.println("Ŭ���̾�Ʈ ���ӵ� "+session);
	    	// �����ڸ��� �Ѱ��� ������ �����Ǿ� ������ ��ż������� ����
	        this.session = session;
	        connections.add(this);
	        String message = String.format("* %s %s", nickname, "has joined.");
	        broadcast(message);
	    }


	    @OnClose
	    public void end() {
	        connections.remove(this);
	        String message = String.format("* %s %s", nickname, "has disconnected.");
	        broadcast(message);
	    }

	    // ���� ���ǰ� ����� Ŭ���̾�Ʈ�κ��� �޽����� ������ ������ ���ο� �����尡 ����Ǿ� incoming()�� ȣ����
	    @OnMessage
	    public void incoming(String message) {
	    	
	    	String threadName = "Thread-Name:"+Thread.currentThread().getName();
	    	System.out.println(threadName+", "+nickname);
	        if(message==null || message.trim().equals("")) return;
	        String filteredMessage = String.format("%s: %s", nickname, message);
	        broadcast(filteredMessage);
	    }

	    
	    @OnError
	    public void onError(Throwable t) throws Throwable {
	        System.err.println("Chat Error: " + t.toString());
	    }

	    // ���� �������κ��� ������ �޽����� ��� �����ڿ��� �����Ѵ�
	   private void broadcast(String msg) {
	    	Iterator<WebSocketTest> ss = connections.iterator();
	    	
	        for (int i=0;i<connections.size();i++) {
	        	WebSocketTest client = ss.next();
	            try {
	                synchronized (client) {
	                    // ������ ���� ���� ��� �̿��ڿ��� �������� �����Ѵ�
	                    client.session.getBasicRemote().sendText(msg);
	                }
	            } catch (IllegalStateException ise){
	            	// Ư�� Ŭ���̾�Ʈ���� ���� �޽��� ������ �۾� ���� ��쿡 ���ÿ� �����۾��� ��û�ϸ� ���� �߻���
//	            	if(ise.getMessage().indexOf("[TEXT_FULL_WRITING]")!=-1) {
//	            		new Thread() {
//	            			@Override
//	            			public void run() {
//			            		while(true) {
//			            			try{
//			            				client.session.getBasicRemote().sendText(msg);
//			            				break;
//			            			}catch(IllegalStateException _ise){
//			            				try {
//								Thread.sleep(100); // �޽��� ������ �۾��� ��ġ���� ��ٷ��ش�
//								} catch (InterruptedException e) {}
//			            			}
//			            			catch(IOException ioe){
//			            				ioe.printStackTrace();
//			            			}
//			            		}
//	            			}
//	            		}.start();
//	            	}
	            } catch (Exception e) {
	            	// �޽��� ���� �߿� ������ �߻�(Ŭ���̾�Ʈ ������ �ǹ���)�ϸ� �ش� Ŭ���̾�Ʈ�� �������� �����Ѵ�
	                System.err.println("Chat Error: Failed to send message to client:"+e);
	                connections.remove(client);
	                try {
	                	// ���� ����
	                    client.session.close();
	                } catch (IOException e1) {
	                    // Ignore
	                }
	                // �� Ŭ���̾�Ʈ�� ������ ��� �̿��ڿ��� �˸���
	                String message = String.format("* %s %s",
	                        client.nickname, "has been disconnected.");
	                broadcast(message);
	            }
	        }
	    }
}
