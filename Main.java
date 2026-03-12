import javax.swing.*;

class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Dinosaur Game");
        GamePanel gpanel = new GamePanel();
        frame.add(gpanel);
        frame.pack();
        frame.setSize(600, 400);
        frame.setLocationRelativeTo(null); // Center the window on the screen
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        gpanel.requestFocusInWindow(); // without this KeyListener is dead
    }
}