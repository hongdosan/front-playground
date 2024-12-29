function func(limit, list) {
  console.log(
    list.filter(i => i % 2)
      .map(i => i * i)
      .slice(0, limit - 1)
      .reduce((x, i) => x + i)
  );
}

func(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
