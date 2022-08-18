const puzzle = (N, P) => { 
    var A = 1, B = 1, C = 1, D = 1, X;
    for (var j = 0; j < P; j++)
    for (var i = 0; i < N; i++)
    { X = D + 2 * C + 3 * B + 4 * A;
      A = B;
      B = C;
      C = D;
      D = X;
    } return D % 10000000000;
};
console.log(puzzle(10, 1)); 
console.log(puzzle(100, 1));
console.log(puzzle(2022, 100));