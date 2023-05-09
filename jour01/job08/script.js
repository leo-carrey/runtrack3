function sommenombrespremiers(x, y){
if (x<=1 || y<=1) return false;
for (var i = 2; i <= x-1; i++)
    if (x % i == 0) return false;
for (var i = 2; i <= y-1; i++)
    if (y % i == 0) return false;
return x + y;
}

console.log(sommenombrespremiers(3,5))