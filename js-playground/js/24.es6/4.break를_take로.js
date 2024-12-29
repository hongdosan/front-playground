function func(limit, list) {
  let x = 0;

  for (const i of list.filter(i => i % 2).map(i => i * i).slice(0, limit - 1)) {
    x = x + i;
    console.log(x);
  }
}

func(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
