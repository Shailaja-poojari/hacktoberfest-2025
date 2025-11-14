
import java.util.*;
public class rotate {
   public static void main(String[] args) {
        int[][] mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int n = mat.length;
        int[][] rotated = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                rotated[j][n - 1 - i] = mat[i][j];
            }
        }
        System.out.println("Matrix rotated 90° clockwise:");
        for (int[] row : rotated) {
            System.out.println(Arrays.toString(row));
        }

   } 
}
