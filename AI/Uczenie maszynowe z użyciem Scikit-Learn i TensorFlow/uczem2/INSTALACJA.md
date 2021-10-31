# Instalacja

## Zainstaluj Anacondę
Będziesz potrzebować środowisko Python w wersji 3.6 lub 3.7 i kilka bibliotek Pythona. Najprościej jest je zainstalować za pomocą Anacondy, czyli znakomitej, międzyplatformowej dystrybucji, służącej do obliczeń naukowych. Zawiera ona wiele wbudowanych bibliotek naukowych, takich jak NumPy, Pandas, Matplotlib, Scikit-Learn itd., więc pliki instalacyjne są dość pokaźnych rozmiarów. Jeżeli postanowisz [pobrać i zainstalować Anacondę](https://www.anaconda.com/distribution/), wybierz wersję obsługującą język Python 3. Jeśli zależy Ci na mniejszej dystrybucji Anacondy, możesz [zainstalować Minicondę](https://docs.conda.io/en/latest/miniconda.html), która zawiera niezbędne minimum zasobów potrzebnych do uruchomienia narzędzia `conda`.

Po zainstalowaniu Anacondy/Minicondy wpisz poniższe polecenie, aby zaktualizować narzędzie `conda` do najnowszej wersji:

    $ conda update -n base -c defaults conda

> **Uwaga**: jeżeli z jakiegoś powodu nie przepadasz za Anacondą, możesz zainstalować środowisko Python 3 i użyć menedżera pip, aby własnoręcznie zainstalować wymagane biblioteki (nie jest to zalecane rozwiązanie, jeżeli nie wiesz, jak to zrobić).


## Zainstaluj sterownik i biblioteki karty graficznej
Jeżeli dysponujesz kartą graficzną kompatybilną z modułem TensorFlow (kartą firmy NVidia wyposażoną w funkcję Compute Capability ≥ 3.5) i chcesz, aby moduł TensorFlow korzystał z jej możliwości, powinieneś pobrać najnowszą wersję jej sterownika ze strony [nvidia.com](https://www.nvidia.com/Download/index.aspx?lang=en-us) i zainstalować go. Będą potrzebne także biblioteki CUDA i cuDNN, ale dobra wiadomość jest taka, że zostaną one automatycznie zainstalowane wraz z pakietem tensorflow-gpu z poziomu Anacondy. Jeśli jednak nie korzystasz z Anacondy, będziesz musiał własnoręcznie zainstalować te biblioteki. W przypadku jakichkolwiek problemów zajrzyj do odpowiedniej [instrukcji instalacji](https://tensorflow.org/install/gpu).

Jeżeli chcesz korzystać z procesora graficznego, to powinieneś także edytować plik environment.yml (lub environment-windows.yml w przypadku użytkowania systemu Windows), który jest umieszczony w głównym katalogu plików źródłowych dołączonych do książki i zastąpić w nim wiersz tensorflow=2.0.0 wyrażeniem tensorflow-gpu=2.0.0, a także wiersz tensorflow-serving-api==2.0.0 zapisem tensorflow-serving-api-gpu==2.0.0. Rozwiązanie to stanie się zbędne w momencie opublikowania modułu TensorFlow 2.1.

## Stwórz środowisko tf2
Przejdź teraz do głównego katalogu projektu i wpisz następujące polecenie. Zostanie utworzone nowe środowisko `conda`, zawierające wszystkie wszystkie biblioteki niezbędne do uruchamiania kodu zawartego w poszczególnych notatnikach (środowisko to domyślnie będzie nazwane `tf2`, ale może zmienić tę nazwę za pomocą opcji `-n`):

    $ conda env create -f environment.yml # lub environment-windows.yml w systemie Windows

Uaktywnij teraz to środowisko:

    $ conda activate tf2

## System Windows
Jeżeli korzystasz z systemu Windows i chcesz wykorzystać kod uczenia przez wzmacnianie (rozdział 18.), to musisz również wpisać poniższą komendę. Zostanie zainstalowana wersja biblioteki atari--py kompatybilna z systemem Windows.

    $ pip install --no-index -f https://github.com/Kojoley/atari-py/releases atari_py


> **Ostrzeżenie**: Projekty TensorFlow Transform (rozdział 13.) i TensorFlow-AddOns (rozdział 16.) nie są jeszcze dostępne w systemie Windows, ale zespół TensorFlow pracuje nad zmianą tego stanu rzeczy.


## Uruchom środowisko Jupyter
Już niemal gotowe! Musisz jeszcze tylko zarejestrować środowisko `tf2` w aplikacji Jupyter. Stanowiące część naszego projektu notatniki domyślnie będą uruchamiane w środowisku nazwanym `python3`, dlatego najlepiej zarejestrować nasze środowisko pod nazwą `python3` (jeżeli zdecydujesz się na inną nazwę, będziesz musiał ją wybierać w menu "Kernel > Change kernel..." za każdym razem, gdy będziesz otwierał notatnik):

    $ python3 -m ipykernel install --user --name=python3

To wszystko! Możesz teraz uruchomić aplikację Jupyter następująco:

    $ jupyter notebook

Aplikacja powinna pojawić się w Twojej przeglądarce i wyświetli się widok hierarchiczny treści bieżącego katalogu. Jeżeli przegladarka nie uruchomi się automatycznie, wejdź na adres [localhost:8888](http://localhost:8888/tree). Kliknij plik `indeks.ipynb`, aby wyświetlić spis treści.

Gratulacje! Jesteś gotowy do rozpoczęcia nauki uczenia maszynowego!

Jeśli chcesz wyłączyć aplikację Jupyter, wystarczy wcisnąć kombinację klawiszy Ctrl+C w oknie terminala, w którym została uruchomiona. Za każdym razem, gdy będziesz chciał pracować z tym projektem, musisz otworzyć Terminal i wpisać:

    $ cd $HOME # lub inny, wyznaczony wcześniej katalog projektu
    $ cd handson-ml2 # lub wyznaczona przez Ciebie inna nazwa katalogu
    $ conda activate tf2
    $ jupyter notebook
