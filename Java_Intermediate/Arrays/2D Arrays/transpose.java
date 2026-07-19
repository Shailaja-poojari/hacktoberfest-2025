import java.util.*;

public class transpose {
    public static void main(String[] args) {
        int[][] mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int rows = mat.length, cols = mat[0].length;
        int[][] transpose = new int[cols][rows];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
        transpose[j][i] = mat[i][j];
    }
}
        System.out.println("Transposed matrix:");
        for (int[] row : transpose) {
            System.out.println(Arrays.toString(row));
        }

    }
}
