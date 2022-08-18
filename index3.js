//
 const puzzle = (N, P) =>
  { var A = BigInt(1), B = BigInt(1), C = BigInt(1), D = BigInt(1), X = BigInt(1);
    for (var j = 0; j < P; j++){
     for (var i = 0; i < N; i++)
      {
         X = D + BigInt(2) * C + BigInt(3) * B + BigInt(4) * A;
         A = B; 
         B = C;
         C = D;
          D = X;
      }}
          return Number(D % BigInt(10000000000));
 };
 const puzzlee = (N) =>
  { var A = BigInt(1), B = BigInt(1), C = BigInt(1), D = BigInt(1), X = BigInt(1);
    for (var j = 0; j < P; j++){
     for (var i = 0; i < N; i++)
      {
         X = D + BigInt(2) * C + BigInt(3) * B + BigInt(4) * A;
         A = B; 
         B = C;
         C = D;
          D = X;
      }}
          return Number(D % BigInt(10000000000));
 };
          console.log(puzzle(10, 1));
          console.log(puzzle(100, 1));
          console.log(puzzle(2022, 100));