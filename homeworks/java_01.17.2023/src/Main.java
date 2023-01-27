import static java.lang.Math.sqrt;

public class Main {


    public static void main(String[] args) {

        // 1. Вычислить n-й член последовательности, заданной формулами:
        // a(n) = sqrt(a(n)*a(n) + a(n-1)*a(n-1)),
        // a0 = a1 = 1.
        // Решить задачу через рекурсию и далее оптимизовать алгоритм
        // одним из методов динамического программирования.

        System.out.println(getSequence(2));
        System.out.println(getSequence(3));
        System.out.println(getSequence(4));
        System.out.println(getSequence(5));
        System.out.println("------------");
        System.out.println(sequence(2));
        System.out.println(sequence(3));
        System.out.println(sequence(4));
        System.out.println(sequence(5));

    }


    private static double getSequence(int n) {
        if (n == 0) return 1;
        if (n == 1) return 1;

        return  Math.sqrt(getSequence(n * n) + getSequence((n - 1) * (n - 1)));
    }

    private static double sequence(int n) {
        if (n == 0) return 1;
        if (n == 1) return 1;
        double[] cache = new double[n + 1];
        if (cache[n] == 0) {
                cache[n] = Math.sqrt(getSequence(n * n) + getSequence((n - 1) * (n - 1)));
        }
        return cache[n];
    }
}

//private static int task3(int n){
//    if(n = 4) return a(4)= sqrt(a(3)*a(3)+a(2)*a(2)) = sqrt(sqrt(3)*sqrt(3)+sqrt(2)*sqrt(2))= sqrt(2+1+2)=sqrt(5);

//    if(n = 0) return a(0) = a0 = 1;
//    if(n = 1) a(1) = a1 = 1;
//    if(n = 2) a(2) = sqrt( a(1) * a(1) + a(0) * a(0)) = sqrt(2);
//    if(n = 3) a(3) = sqrt( a(2) * a(2) + a(1) * a(1)) = sqrt( sqrt(2) * sqrt(2) + 1 * 1 ) = sqrt(3);
//    if(n = 4) a(4) = sqrt( a(3) * a(3) + a(2) * a(2)) =sqrt(sqrt(3)*sqrt(3)+sqrt(2)*sqrt(2)) = sqrt(3+2) = sqrt(5);
//}
