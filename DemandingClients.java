import java.io.*;
import java.net.*;
import java.util.Random;

public class DemandingClients {
    public static void main(String[] args) {
        //Random random = new Random(System.currentTimeMillis());
        int[] times = {1000000, 1000, 3500000, 500, 50000000, 60000000, 120000, 33, 2000, 10000};
        String hostName = "127.0.0.1";
        int portNumber = 1337;
        try (
            Socket echoSocket = new Socket(hostName, portNumber);
            PrintWriter out = new PrintWriter(echoSocket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(echoSocket.getInputStream()));
            //BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in))
        ) {
            String path = "req";
            for (int i = 0; i < 10; i ++) {
                String uri = path + (i+1) + "?task=" + times[i];
                out.print("GET /" + uri + " HTTP/1.1\r\n");
                out.print("Host: 127.0.0.1\r\n\r\n");
                out.flush();
            }
            String t;
            //BufferedReader in = new BufferedReader(new InputStreamReader(echoSocket.getInputStream()));
            while((t = in.readLine()) != null) {
                System.out.println(" echo: " + t);
            }
            in.close();
        } catch (UnknownHostException e) {
            System.err.println("Don't know about host " + hostName);
            System.exit(1);
        } catch (IOException e) {
            System.err.println("Couldn't get I/O for the connection to " +
                hostName);
            System.exit(1);
        } 
    }
}