import java.util.Random;

public class Main {
//    задача 1.
//    a(2n) = a(n) + a(n-1),
//    a(2n+1) = a(n) — a(n-1),
//    a0 = a1 = 1.

//    задача 2.
//    Самый дешёвый путь
//    В каждой клетке прямоугольной таблицы N*M записано некоторое число.
//    Изначально игрок находится в левой верхней клетке.
//    За один ход ему разрешается перемещаться в соседнюю клетку либо вправо, либо вниз
//    (влево и вверх перемещаться запрещено).
//    При проходе через клетку игрок платит определенную сумму, какое число записано в этой клетке.
//    Требуется найти минимальную стоимость пути, отдав которую игрок может попасть в правый нижний угол.

    //    задача 3.
//    На вершине лесенки, содержащей N ступенек, находится мячик, который начинает прыгать по ним вниз, к основанию.
//    Мячик может прыгнуть на следующую ступеньку, на ступеньку через одну или через 2.
//    (То есть, если мячик лежит на 8-ой ступеньке, то он может переместиться на 5-ую, 6-ую или 7-ую.)
//    Определить число всевозможных «маршрутов» мячика с вершины на землю.

    public static void main(String[] args) {
//        System.out.println(getSequence(5));
//        System.out.println(getSequenceCash(5));

        int [][] pathCost = new int[][]{
                {0, 1, 3, 4, 5, 6},
                {2, 1, 3, 4, 5, 6},
                {0, 1, 3, 4, 5, 0},
        };

//        System.out.println(getOptimalPath(pathCost));

        System.out.println(ballPath(4));

    }

    public static int ballPath(int n){
        if (n ==0) return 0;
        if (n ==1) return 1;
        if (n ==2) return 2;
        if (n ==3) return 4;
        if (n!=0){

        }
        return ballPath(n-1) + ballPath(n-2)+ballPath(n-3);
    }

    private static int ballPathTabOptimized(int n){
        if (n == 1) return 1;
        if (n == 2) return 2;
        if (n == 3) return 4;
        int cache1 = 1;
        int cache2 = 2;
        int cache3 = 4;
        int cache4 = 7;

        for (int i = 4; i <= n; i++) {
            cache4 = cache1 + cache2 + cache3;
            cache1 = cache2;
            cache2 = cache3;
            cache3 = cache4;
        }
        return cache4;
    }

    public static int getOptimalPath(int[][] arr){
        return findMin(arr, 0,0);
    }
    public static int findMin(int[][] array, int i, int j) {
        int  totalCost = array[i][j];
        if((i<array.length-1)&&(j<array[0].length-1)){
            totalCost = totalCost + Math.min(findMin(array, i + 1, j), findMin(array, i, j + 1));
        } else if (i<array.length-1){
            totalCost = totalCost + findMin(array, i + 1, j);
        } else if(j<array[0].length-1){
            totalCost = totalCost + findMin(array, i, j + 1);
        }
        return totalCost;
    }
    public static int getSequence(int num) {
        if (num == 0) return  1;
        if (num == 1) return  1;
        if (num % 2 == 0) {
            return getSequence(num / 2) + getSequence(num / 2 - 1);
        } else {
            return getSequence(num / 2) - getSequence(num / 2 - 1);
        }
    }

    public static int getSequenceCash(int num) {
        if (num == 0) return  1;
        if (num == 1) return  1;

        int cache[] = new int[num+1];

        if (cache[num] == 0){
            if (num % 2 == 0) {
                return getSequence(num / 2) + getSequence(num / 2 - 1);
            } else {
                return getSequence(num / 2) - getSequence(num / 2 - 1);
            }
        }
    return cache[num];
    }
}
