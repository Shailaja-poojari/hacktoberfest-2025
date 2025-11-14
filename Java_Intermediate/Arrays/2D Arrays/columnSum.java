

public class columnSum {
    public static void main(String[] args) {
        int[][] mat = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        for (int j=0;j<mat[0].length;j++) {
        int sum = 0;
        for (int i=0;i<mat.length;i++) {
            sum += mat[i][j];
        }
        System.out.println("Sum of Column " + sum);
}

    }
}
