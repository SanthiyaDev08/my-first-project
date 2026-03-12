import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Random;

public class GamePanel extends JPanel implements ActionListener, KeyListener {
    /* extends JPanel → this can draw
       implements ActionListener → this can respond to timer events */

    int score = 0;
    int frameCount = 0;

    int dinoY = 250;      // vertical position
    int dinoVy = 0;       // vertical speed

    boolean gameOver = false;

    // Constants
    final int GROUND_Y = 300;
    final double GRAVITY = 1.1;

    //    int obstacleX = 450;   for single obstacle
    int[] obstacleX = {600, 900, 1200};
    int[] obstacleWidth = new int[3];
    int[] obstacleHeight = new int[3];
    Random rand = new Random();
    Timer timer;

    ImageIcon trexRun;

    final int DINO_WIDTH = 100;
    final int DINO_HEIGHT = 100;

    final int MIN_GAP = 220;

    public GamePanel() {
        setPreferredSize(new Dimension(600, 395));
        trexRun = new ImageIcon("t-rex.gif");

//        System.out.println(trexRun.getIconWidth());

        timer = new Timer(30, this); // Every 30 milliseconds. Call actionPerformed of this class
        for (int i = 0; i < obstacleX.length; i++) {
            obstacleWidth[i] = 10 + rand.nextInt(20);  // width between 10 and 30
            obstacleHeight[i] = 20 + rand.nextInt(30); // height between 20 and 50
        }
        timer.start();
        setFocusable(true);
        addKeyListener(this);
        requestFocusInWindow();
    }

    void resetGame() {
        dinoY = GROUND_Y;
        dinoVy = 0;
        obstacleX[0] = 600;
        obstacleX[1] = 900;
        obstacleX[2] = 1200;
        gameOver = false;
        score = 0;
        timer.start();
    }


    @Override
    protected void paintComponent(Graphics g) {  // Java calls this method automatically. You do not call it yourself
        super.paintComponent(g);

        // background
        g.setColor(Color.DARK_GRAY);
        g.fillRect(0, 0, 600, 300);

        // ground
        g.setColor(Color.GREEN);
        g.fillRect(0, 300, 600, 5);

        // underground
        g.setColor(Color.GRAY);
        g.fillRect(0,300, 600, 95);

        // dinosaur
        g.drawImage(trexRun.getImage(), 0, dinoY - DINO_HEIGHT, DINO_WIDTH, DINO_HEIGHT, this);

        // obstacle
//        g.fillRect(obstacleX, 260, 20, 40); single obstacle
        g.setColor(Color.GRAY);
        for (int i = 0; i < obstacleX.length; i++) {
            g.fillRect(obstacleX[i], 300 - obstacleHeight[i], obstacleWidth[i], obstacleHeight[i]);
        }  // y -> to get the top value

        g.setColor(Color.GRAY);
        g.setFont(new Font("Arial", Font.BOLD, 20));
        g.drawString("Score: " + score, 20, 30);

//        g.setColor(Color.RED);
//        g.drawRect(HITBOX_X_OFFSET,
//                dinoY - HITBOX_HEIGHT - HITBOX_Y_OFFSET,
//                HITBOX_WIDTH,
//                HITBOX_HEIGHT);


        if (gameOver) {
            g.setColor(Color.WHITE);
            g.setFont(new Font("Arial", Font.BOLD, 28));
            g.drawString("GAME OVER", 180, 150);

            g.setFont(new Font("Arial", Font.PLAIN, 18));
            g.drawString("Press R to Restart", 185, 185);
        }

    }

    final int HITBOX_WIDTH  = 60;
    final int HITBOX_HEIGHT = 50;
    final int HITBOX_X_OFFSET = 20;   // center inside sprite
    final int HITBOX_Y_OFFSET = 10;   // push hitbox downward

    @Override
    public void actionPerformed(ActionEvent e) {
        for (int i = 0; i < obstacleX.length; i++) {
            if (score < 1000) {
                obstacleX[i] -= 5;
            }
            else if (score <= 2000) {
                obstacleX[i] -= 6;
            }
            else {
                obstacleX[i] -= 7;  // max speed
            }
            // respawning of an obstacle
            if (obstacleX[i] + obstacleWidth[i] < 0) {

                // 1️⃣ find farthest obstacle
                int farthestX = 0;
                for (int j = 0; j < obstacleX.length; j++) {
                    if (obstacleX[j] > farthestX) {
                        farthestX = obstacleX[j];
                    }
                }

                // 2️⃣ respawn AFTER it
                obstacleX[i] = farthestX + MIN_GAP + rand.nextInt(150);

                // 3️⃣ random size
                obstacleWidth[i]  = 10 + rand.nextInt(20);
                obstacleHeight[i] = 20 + rand.nextInt(30);
            }

        }

        dinoVy += GRAVITY;
        dinoY += dinoVy;

        if (dinoY > GROUND_Y) {
            dinoY = GROUND_Y;
            dinoVy = 0;
        }

        // ---- COLLISION CHECK ----
        for (int i = 0; i < obstacleX.length; i++) {
            int dinoLeft   = HITBOX_X_OFFSET;
            int dinoRight  = HITBOX_X_OFFSET + HITBOX_WIDTH;
            int dinoTop    = dinoY - HITBOX_HEIGHT - HITBOX_Y_OFFSET;
            int dinoBottom = dinoY - HITBOX_Y_OFFSET;

            int obsLeft   = obstacleX[i];
            int obsRight  = obstacleX[i] + obstacleWidth[i];
            int obsTop    = 300 - obstacleHeight[i];
            int obsBottom = 300;

            boolean collision =
                    dinoRight  > obsLeft &&
                            dinoLeft   < obsRight &&
                            dinoBottom > obsTop &&
                            dinoTop    < obsBottom;


            if (collision) {
                gameOver = true;
                timer.stop();
            }
        }
        frameCount++;
        if (!gameOver) {
            if (frameCount % 3 == 0) score++;
        }
        repaint(); // paintComponent to run again
    }
    /* Java calls this method:
        every 30 ms
        automatically
        forever (until the program ends)
        You do not call it. */
    @Override
    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_SPACE && dinoY == GROUND_Y) {
            dinoVy = -20; // jump
        }
        if (e.getKeyCode() == KeyEvent.VK_R) {
            resetGame();
        }
    }
    @Override
    public void keyReleased(KeyEvent e) {}
    @Override
    public void keyTyped(KeyEvent e) {}
}


/*
    Initially, the dinosaur is at rest on the ground, so its vertical position dinoY is 250 and its vertical speed dinoVy is 0.
    When the jump key is pressed, the dinosaur does not move immediately; instead, an initial upward velocity is given by setting dinoVy = -20.
    During each timer update, gravity acts on the dinosaur by increasing its vertical speed by a constant positive value (gravity = +2). This gradually reduces the upward speed, eventually making dinoVy equal to 0, which represents the top of the jump.
    After this point, gravity continues to increase dinoVy in the positive direction, causing the dinosaur to fall downward as dinoY increases. The dinosaur’s vertical position is updated every frame using its current vertical speed.
    When the dinosaur reaches the ground level, its position is clamped back to dinoY = 250 and its vertical speed is reset to 0, ensuring it stops correctly and does not fall below the ground.
 */
