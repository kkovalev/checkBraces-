# checkBraces()

Реализовать функцию checkBraces($str), проверяющую на синтаксическую верность последовательность скобок

* Необходимо учитывать вложенность
* Обратите внимание на производительность вашего решения
* В случае ошибки возвращаем 1, в противном случае 0

Минимальный набор тестов:
```javascript
    checkBraces("---(++++)----") == 0
    checkBraces("") -> 0
    checkBraces("before ( middle []) after ") == 0
    checkBraces(") (") == 1
    checkBraces("} {") == 1
    checkBraces("<(   >)") == 1
    checkBraces("(  [  <>  ()  ]  <>  )") == 0
    checkBraces("   (      [)") == 1
```

## RoadMap

- [ ] First do it
- [ ] Then do it right
- [ ] Then do it better