import java.util.Arrays;

public class reverse {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int n = arr.length;
        for (int i=0;i<n/2;i++) {
        int temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
}
System.out.println("Reversed array: " + Arrays.toString(arr)); //just to print the array without using loop.

    }
}
