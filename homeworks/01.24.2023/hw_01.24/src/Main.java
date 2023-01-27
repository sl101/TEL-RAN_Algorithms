import java.sql.Array;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Queue queue = new Queue(5);
        System.out.println(queue.toString());
        queue.remove();
        queue.pushToEnd(1);
        queue.pushToEnd(2);
        queue.pushToEnd(3);
        queue.pushToEnd(4);
        queue.pushToEnd(5);
        System.out.println("добавлено пять элементов");
        System.out.println(queue.toString());
        queue.pushToEnd(6);
        System.out.println("size: " + queue.size());
        System.out.println("первый элемент: " + queue.peek());
        System.out.println("пусто?: " + queue.isEmpty());
        queue.remove();
        queue.remove();
        queue.remove();
        queue.remove();
        queue.remove();
        System.out.println("удалено пять элементов");
        System.out.println(queue.toString());
        queue.remove();
        System.out.println("пусто?: " + queue.isEmpty());
        System.out.println("size: " + queue.size());
    }
}
