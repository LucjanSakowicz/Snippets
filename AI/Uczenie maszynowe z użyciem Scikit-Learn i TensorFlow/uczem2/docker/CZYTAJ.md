
# Uczenie maszynowe w Dockerze

Jest to konfiguracja Dockera, umożliwiająca uruchamianie i modyfikowanie notatników Jupyter bez konieczności instalowania zależności na Twoim komputerze!<br/>
No dobra, za wyjątkiem pakietów `docker` i `docker-compose`. Możesz również chcieć zainstalować `make` (służy on jednak tylko jako cienka warstwa pozwalająca na wywoływanie kilku prostych poleceń `docker-compose`).

## Wymogi wstępne

Jak już wspomniałem, potrzebne będą pakiety `docker` i `docker-compose`.

Postępuj zgodnie z instrukcjami [instalacji Dockera](https://docs.docker.com/engine/installation/) i [zainstaluj Docker Compose](https://docs.docker.com/compose/install/) w swoim środowisku, jeżeli jeszcze nie masz w nim Dockera.

Warto mieć ogólne pojęcie na temat infrastruktury Dockera (jest to samo w sobie ciekawe zagadnienie), ale nie koniecznie *wymagane*, jeżeli zamierzasz tylko uruchamiać notatniki.

## Zastosowanie

### Przygotowanie obrazu (czynność jednorazowa)

Przejdź do katalogu `docker` i wykonaj polecenie `make build` (lub `docker-compose build`), aby stworzyć obraz Dockera. Proces ten może zająć trochę czasu, ale jest wymagany tylko jednorazowo, chyba że coś zmieniać w `Dockerfile`, to wtedy po każdej zmianie musisz go powtorzyć.

Po zakończeniu przetwarzania otrzymasz obraz `handson-ml2`, który będzie teraz stanowił bazę do eksperymentowania. Możesz to sprawdzić poprzez wpisanie polecenia `docker images`.

### Uruchamianie notatników

Wpisz polecenie `make run` (lub `docker-compose up`), a aby uruchomić serwer Jupyter wewnątrz kontenera (nosi on taką samą nazwę, jak obraz, czyli `handson-ml2`). Wystarczy teraz wstawić do przeglądarki wyświetlony adres URL (lub adres <http://localhost:8888>, jeżeli włączyłeś uwierzytelnianie hasłem i po chwili będziesz mógł korzystać z notatników!

Serwer działa w katalogu zawierającym notatniki i wprowadzane przez Ciebie zmiany będą tam zapisywane.

Aby wyłączyć serwer, wystarczy wcisnąć kombinację klawiszy `Ctrl+C` w oknie terminala.

### Realizowanie dodatkowych poleceń w kontenerze

Wpisz polecenie `make exec` (lub `docker-compose exec handson-ml2 bash`), gdy serwer jest uruchomiony, aby uaktywnić dodatkową powłokę `bash` wewnątrz kontenera `handson-ml2`. Znajdujesz się teraz wewnątrz środowiska przygotowanego wewnątrz obrazu.

Jedną z przydatnych czynności wewnątrz tego środowiska jest uruchomienie narzędzia TensorBoard (więcej informacji na temat użycia polecenia `tb` znajdziesz w pliku dokumentacji bashrc).

Inną przydatną funkcją może być porównywanie wersji notatników za pomocą polecenia `nbdiff`, jeśli nie masz zainstalowanego lokalnie pakietu `nbdime` (w przypadku notatników jest ono **znacznie** lepsze od zwykłego polecenia `diff`). Szczegóły znajdziesz na [stronie opisującej narzędzia rozróżniania i scalania notatników Jupyter](https://github.com/jupyter/nbdime).

Możesz sprawdzać zmiany wprowadzane w porównaniu do wersji zawartych w repozytorium git za pomocą polecenia `git diff`, które stanowi część pakietu `nbdiff`.

Możesz także wypróbować polecenie `nbd NAZWA_NOTATNIKA.ipynb` (niestandardowe, zob. plik bashrc), aby porównać jeden z notatników z jego wersją zawierającą `punkt kontrolny`.<br/>
Mówiąc dokładniej, otrzymany wynik będzie określał, *jakie modyfikacje należy ponownie wprowadzić w **ręcznie zapisanej** wersji notatnika (umieszczonej w podkatalogu `.ipynb_checkpoints`) po to,aby zaktualizować ją do wersji **bieżącej** tj. **zapisanej automatycznie** (podanej jako argument polecenia - wewnątrz katalogu roboczego)*.
