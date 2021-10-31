# Zestaw danych Johann Sebastian Bach Chorales

## Źródło
Ten zestaw danych zawiera 382 chorały Jana Sebastiana Bacha (własność publiczna), gdzie każdy chorał zawiera od 100 do 640 akordów w rozdzielczości czasowej 1/16. Każdy akord składa się z czterech wartości stałoprzecinkowych, z których każda określa indeks nuty oprócz wartości 0, która oznacza "cisza".

Zestaw ten bazuje na [zestawie JSB-Chorales-dataset, którego autorem jest czhuang](https://github.com/czhuang/JSB-Chorales-dataset/blob/master/README.md) (`Jsb16thSeparated.npz`), w którym użyto podziału na zbiory uczący, walidacyjny i testowy autorstwa Boulangera-Lewandowskiego (2012).

Motywacja: stwierdziłem, że przyda się wersja tego zestawu danych w formacie CSV.

## Materiały dodatkowe
Boulanger-Lewandowski, N., Vincent, P., & Bengio, Y. (2012). Modeling Temporal Dependencies in High-Dimensional Sequences: Application to Polyphonic Music Generation and Transcription. "Proceedings of the 29th International Conference on Machine Learning (ICML-12)", 1159–1166.

## Zastosowanie
Pobierz plik `jsb_chorales.tgz` i rozpakuj go:

```bash
$ tar xvzf jsb_chorales.tgz
```

## Struktura danych
Zestaw danych jest podzielony na trzy zbiory (train, valid, test), zawierające łącznie 382 pliki CSV:

```
$ tree
.
├── train
│   ├── chorale_000.csv
│   ├── chorale_001.csv
│   ├── chorale_002.csv
│   │   ...
│   ├── chorale_227.csv
│   └── chorale_228.csv
├── valid
│   ├── chorale_229.csv
│   ├── chorale_230.csv
│   ├── chorale_231.csv
│   │   ...
│   ├── chorale_303.csv
│   └── chorale_304.csv
└── test
    ├── chorale_305.csv
    ├── chorale_306.csv
    ├── chorale_307.csv
    │   ...
    ├── chorale_380.csv
    └── chorale_381.csv
```

## Przykładowe dane

```
$ head train/chorale_000.csv
note0,note1,note2,note3
74,70,65,58
74,70,65,58
74,70,65,58
74,70,65,58
75,70,58,55
75,70,58,55
75,70,60,55
75,70,60,55
77,69,62,50
```

Baw się dobrze!
