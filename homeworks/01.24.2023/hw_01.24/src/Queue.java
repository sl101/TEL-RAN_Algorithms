import java.util.Arrays;

public class Queue {
    private int[] arr;      // массив для хранения элементов queue
    private int head;      // head указывает на передний элемент в queue
    private int tail;       // tail часть указывает на последний элемент в queue
    private int capacity;   // максимальная емкость queue
    private int count;      // текущий размер queue

    public Queue(int size) {
        arr = new int[size];
        capacity = size;
//        front = 0;
//        rear = -1;
        head = 0;
        tail = -1;
        count = 0;
    }

    public void pushToEnd(int data){ // - вставляет элемент в конец queue
        // 1. массив пустой
        //        count = 0;
        //        head = 0;
        //        tail = -1;
        // 2. в массиве есть как минимум 1 значение
        //        count = 1;
        //        head = arr[0];
        //        tail = arr[count];
        // 3. массиве полный
        //        count = capacity;
        //        head = arr[0];
        //        tail = arr[count];
        if(count < capacity){
            if (count == 0){
                head = data;
            }
            tail = data;
            arr[count] = data;
            count++;
        } else {
            System.out.println("Попытка добавления => Ошибка переполнения. Массив полный");
        }
    };

    public void remove(){ // - удаляет элемент из начала queue
        // 1. массив пустой
        //        count = 0;
        //        head = 0;
        //        tail = -1;
        // 2. в массиве есть как минимум 1 значение
        //        count = 1;
        //        head = arr[0];
        //        tail = arr[count];
        // 3. массиве полный
        //        count = capacity;
        //        head = arr[0];
        //        tail = arr[count];
        if(count > 1){
            head = arr[1];
            for (int i = 1; i < count; i++) {
                arr[i-1] = arr[i];
            }
            count--;
            tail = arr[count-1];
            arr[count] = 0;
        } else if(count == 1){
            head = 0;
            tail = -1;
            count--;
            arr[count] = 0;
        } else {
            System.out.println("Попытка удаления => Ошибка. Массив пуст");
        }
    };

    public int peek(){ // - возвращает элемент из начала не удаляя его
        return head;
    };

    public boolean isEmpty() {
        if (count > 0) {
            return false;
        } else {
            return true;
        }
    }

    public int size(){
        return count;
    };

    @Override
    public String toString() {
        return "Queue{" +
                "arr=" + Arrays.toString(arr) +
                ", head=" + head +
                ", tail=" + tail +
                ", capacity=" + capacity +
                ", count=" + count +
                '}';
    }
}
