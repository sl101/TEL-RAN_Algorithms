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
        count = 0;
    }

    public void pushToEnd(int data){ // - вставляет элемент в конец queue
        arr[count] = data;
        count++;
    };

    public void remove(){ // - удаляет элемент из начала queue
        if(count!=0){
            head = arr[1];
            for (int i = 1; i < count; i++) {
                arr[i-1] = arr[i];
            }
            count--;
            tail = arr[count];
            arr[count] = 0;
        }
    };

    public int peek(){ // - возвращает элемент из начала не удаляя его
        return head;
    };

    public boolean isEmpty() {
        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }

    public int size(){
        return count;
    };
}
