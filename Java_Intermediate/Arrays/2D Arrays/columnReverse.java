import java.util.*;

public class columnReverse {
    public static void main(String[] args) {
        int[][] mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int rows = mat.length, cols = mat[0].length;
        for (int j=0; j < cols; j++) {
            int top = 0, bottom = rows - 1;
        while (top < bottom) {
            int temp = mat[top][j];
            mat[top][j] = mat[bottom][j];
            mat[bottom][j] = temp;
            top++;
            bottom--;
    }
}
        System.out.println("Matrix with columns reversed:");
        for (int[] row : mat) {
            System.out.println(Arrays.toString(row));
        }

    }
}
