public class Main {
    private static int[] arrayT

    public static void main(String[] args) {

        int[] array = {1, 5, 8, 99, 12};
        System.out.println(linearSearch(array, 8));

        int[] arrayTwo = {1, 1, 33, 33, 99};
        System.out.println(findElement(arrayTwo));

    }

    public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {  // traverse the array
            if (arr[i] == key) { // match the key element with array element
                return i; // return index
            }
        }
        return -1; // not found element
    }

    public static int findElement(int arr[]) {
        int size = arr.length;

        if (size == 1) {
            return arr[size - 1];
        }

        if (arr[size - 2] != arr[size - 1]) { // arr[3] != arr[4]   33 != 99
            return arr[size - 1];             // 99
        }


        for (int i = 0; i < size; i += 2) {
            if (arr[i] != arr[i + 1]) {
                return arr[i];
            }
        }

        return -1;
    }
}
