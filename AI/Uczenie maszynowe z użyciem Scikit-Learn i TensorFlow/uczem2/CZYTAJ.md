Notatniki uczenia maszynowego
==========================

Celem tego projektu jest nauczenie Cię podstaw uczenia maszynowego w środowisku Python. Znajdziesz tu przykładowy kod i rozwiązania ćwiczeń wyznaczonych w książce [Hands-on Machine Learning with Scikit-Learn, Keras and TensorFlow](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/):

<img src="https://images-na.ssl-images-amazon.com/images/I/51aqYc1QyrL._SX379_BO1,204,203,200_.jpg" title="book" width="150" />

## Szybki start
### Chcesz zainstalować ten projekct na swoim komputerze?

Zainstaluj najpierw [Anacondę](https://www.anaconda.com/distribution/) (lub [Minicondę](https://docs.conda.io/en/latest/miniconda.html)) i, jeśli dysponujesz kartą graficzną obsługującą procesor GPU, również [sterownik GPU](https://www.nvidia.com/Download/index.aspx).

Jeżeli chcesz korzystać z karty graficznej, edytuj plik `environment.yml` (lub `environment-windows.yml` dla systemu Windows) i zastąp wiersz `tensorflow=2.0.0` linijką `tensorflow-gpu=2.0.0` oraz wiersz `tensorflow-serving-api==2.0.0` linijką `tensorflow-serving-api-gpu==2.0.0`.

Następnie wpisz poniższe polecenia (pomiń symbol `$` w poszczególnych wierszach, gdyż określa on tylko, że mamy do czynienia z poleceniami terminala)::

    $ conda env create -f environment.yml # lub environment-windows.yml dla systemu Windows
    $ conda activate tf2
    $ python -m ipykernel install --user --name=python3

Jeżeli korzystasz z systemu Windows, wpisz dodatkowo następujące polecenie:

    $ pip install --no-index -f https://github.com/Kojoley/atari-py/releases atari_py

Na koniec uruchom środowisko Jupyter:

    $ jupyter notebook

Szczegółowe informacje znajdziesz [w instrukcjach instalacji](INSTALACJA.md).

# Ofiarodawcy
Chciałbym podziękować wszystkich osobom przyczyniającym się do powstania tego projektu, czy to poprzez sugestie, wykrywanie błędów albo dzielenie się wątpliwościami. Specjalne podziękowania kieruję do użytkowników Steven Bunkley i Ziembla za stworzenie katalogu `docker`.
