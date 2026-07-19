import java.util.*;

public class rowReverse {
    public static void main(String[] args) {
        int[][] mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        for (int i=0;i<mat.length;i++) {
            int left=0, right = mat[i].length - 1;
        while (left<right) {
            int temp = mat[i][left];
            mat[i][left] = mat[i][right];
            mat[i][right] = temp;
            left++;
            right--;
    }
}
System.out.println("Matrix with rows reversed:");
for (int[] row : mat) {
    System.out.println(Arrays.toString(row));
}

    }
}
