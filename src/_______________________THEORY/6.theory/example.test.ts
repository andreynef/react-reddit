//люб jest тест нач с "test". 2арг. Название и колбэк.

test('should return true when adding 2 and 3', ()=>{
  expect(2+3).toBeLessThan(6);
});

// describe('group', ()=>{//обьединение в группу. Мб Много вложенностей.
//   test('should return true when adding 2 and 3', ()=>{
//     expect(2+3).toBeLessThan(6);
//   });
//   describe('some local group', ()=>{
//     test('should return true when adding 2 and 3', ()=>{
//       expect(2+3).toBeLessThan(6);
//     });
//   })
// });