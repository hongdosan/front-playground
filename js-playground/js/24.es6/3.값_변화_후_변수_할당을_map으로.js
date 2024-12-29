function func(limit, list) {
  let x = 0;

  for (const i of list.filter(i => i % 2).map(i => i * i)) {
      x = x + i;

      if (--limit === 0) {
        break;
    }

    console.log(x);
  }
}

func(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
