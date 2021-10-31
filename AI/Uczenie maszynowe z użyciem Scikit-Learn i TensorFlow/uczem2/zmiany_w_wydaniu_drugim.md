# Zmiany w wydaniu drugim
W wydaniu drugim postawiłem sobie sześć głównych celów:

1. Omówienie dodatkowych tematów z zakresu uczenia maszynowego: dodatkowych technik uczenia nienadzorowanego (w tym analizy skupień, wykrywania anomalii, szacowania gęstości i modeli mieszanin), dodatkowych technik uczenia sieci głębokich (w tym sieci samonormalizujących), dodatkowych technik widzenia maszynowego (w tym modeli Xception, SENet, wykrywania obiektów za pomocą algorytmu YOLO i segmentacji semantycznej za pomocą sieci R-CNN), przetwarzania sekwencji za pomocą sieci splotowych (w tym modelu WaveNet), przetwarzania języka naturalnego za pomocą sieci rekurencyjnych, splotowych, a także transformatorów i generatywnych sieci przeciwstawnych.
2. Omówienie dodatkowych bibliotek i interfejsów API: Keras, interfejs danych, biblioteka TF-Agents używana w uczeniu przez wzmacnianie, trenowanie i wdrażanie modeli uczenia przez wzmacnianie za pomocą interfejsu strategii rozpraszania, biblioteki TF-Serving i platformy GCP. Ponadto krótki opis projektu TF Trasnform, TFLite, TF Addons/Seq2Seq, TensorFlow.js itd.
3. Wspomnienie o najnowszych istotnych osiągnięciach w dziedzinie uczenia głębokiego.
4. Przeniesienie wszystkich rozdziałów, w których był używany moduł TensorFlow do wersji TensorFlow 2, a także uproszczenie listingów poprzez wprowadzanie implementacji interfejsu Keras (o nazwie tf.keras) wszędzie tam, gdzie to możliwe.
5. Zaktualizowanie listingów do najnowszych wersji bibliotek Scikit-Learn, NumPy, Pandas, Matplotlib i innych.
6. Doprecyzowanie niektórych zagadnień i usunięcie błędów, co okazało się możliwe dzięki wydatnej pomocy Czytelników.

Pewne rozdziały zostały dodane, inne napisane od nowa, a jeszcze w innych zmieniono kolejność treści. W poniższej tabeli wyjaśniam powiązania pomiędzy rozdziałami z wydania 1. a rozdziałami z wydania 2.: 

|Rozdział z wyd. 1.  | Rozdział z wyd. 2. | % Zmian | Tytuł w wydaniu 2.
|--|--|--|--|
|1.|1.|<10%|Krajobraz uczenia maszynowego
|2.|2.|<10%|Nasz pierwszy projekt uczenia maszynowego
|3.|3.|<10%|Klasyfikacja
|4.|4.|<10%|Uczenie modeli
|5.|5.|<10%|Maszyny wektorów nośnych
|6.|6.|<10%|Drzewa decyzyjne
|7.|7.|<10%|Uczenie zespołowe i losowe lasy
|8.|8.|<10%|Redukcja wymiarowości
|Brak|9.|100% nowy|Techniki uczenia nienadzorowanego
|10.|10.|~75%|Wprowadzenie do sztucznych sieci neuronowych z użyciem interfejsu Keras
|11.|11.|~50%|Uczenie głębokich sieci neuronowych
|9.|12.|100% przerobiony|Modele niestandardowe i uczenie za pomocą modułu TensorFlow
|Część 12.|13.|100% przerobiony|Wczytywanie i przetwarzanie wstępne danych za pomocą modułu TensorFlow
|13.|14.|~50%|Głębokie widzenie komputerowe za pomocą splotowych sieci neuronowych
|Część 14.|15.|~75%|Przetwarzanie sekwencji za pomocą sieci rekurencyjnych i splotowych
|Część 14.|16.|~90%|Przetwarzanie języka naturalnego za pomocą sieci rekurencyjnych i mechanizmów uwagi
|15.|17.|~75%|Uczenie reprezentacji za pomocą autokoderów i generatywnych sieci przeciwstawnych
|16.|18.|~75%|Uczenie przez wzmacnianie 
|Część 12.|19.|~75% nowy|Wielkoskalowe uczenie i wdrażanie modeli TensorFlow 

Poniżej prezentuję główne zmiany w drugim wydaniu w bardziej szczegółowy sposób (bez uwzględnienia dodatkowych wyjaśnień, poprawek i aktualizacji kodu):

* Rozdział 1. Krajobraz uczenia maszynowego
  * Dodano więcej przykładów zastosowań uczenia maszynowego i powiązane z nimi algorytmy.
  * Dodano sekcję poświęconą zarządzaniu niezgodnością pomiędzy zbiorem uczącym a zbiorami walidacyjnym i testowym.
* Rozdział 2. Nasz pierwszy projekt uczenia maszynowego
  * Dodano opis mechanizmu obliczania przedziału ufności.
  * Poprawiono instrukcje instalacji (zwłaszcza w systemie Windows).
  * Wprowadzono zaktualizowaną klasę `OneHotEncoder` i nową `ColumnTransformer`.
  * Dodano szczegóły dotyczące wdrażania, monitorowania i konserwacji.
* Rozdział 4. Uczenie modeli
  * Wyjaśniono, dlaczego przykłady uczące powinny być IID.
* Rozdział 7. Uczenie zespołowe i losowe lasy
  * Dodano krótką sekcję opisującą model XGBoost.
* Rozdział 9. Techniki uczenia nienadzorowanego (nowy rozdział)
  * Analiza skupień za pomocą algroytmu centroidów, sposób dobierania liczby skupień, a także jej zastosowania w redukowania wymiarowości, uczeniu półnadzorowanych, segmentacji obrazów itd. 
  * Algorytm DBSCAN i przegląd innych algorytmów analizy skupień dostępnych w module Scikit-Learn.
  * Modele mieszanin gaussowskich, algorytm EM, bayesowskie wnioskowanie wariacyjne, a także opis użycia modeli mieszanin w analizie skupień, szacowaniu gęstości, wykrywaniu anomalii i szczegółów.
  * Przegląd innych algorytmów wykrywania anomalii i szczegółów.
* Rozdział 10. Wprowadzenie do sztucznych sieci neuronowych z użyciem interfejsu Keras (w większości nowy)
  * Dodano wprowadzenie do interfejsu Keras i opisano wszystkie jego interfejsy API (sekwencyjny, funkcyjny i podklasowy), trwałość i wywołania zwrotne (w tym wywołanie zwrotne `TensorBoard`).
* Rozdział 11. Uczenie głębokich sieci neuronowych (wiele zmian)
  * Wprowadzono sieci samonormalizujące, funkcję aktywacji SELU i porzucanie alfa.
  * Wprpwadzono uczenie samonadzorowane.
  * Dodano optymalizację Nadam.
  * Dodano porzucanie Monte-Carlo.
  * Dodano uwagę na temat zgarożeń wynikających ze stosowania adaptacyjnych metod optymalizacji.
  * Zaktualizowano praktyczne wskazówki.
* Rozdział 12. Modele niestandardowe i uczenie za pomocą modułu TensorFlow (całkowicie przerobiony)
  * Opis modułu TensorFlow 2.
  * Ogólny interfejs Pythona używany w module TensorFlow.
  * Tworzenie niestandardowych funkcji straty, metryk, warstw i modeli.
  * Korzystanie z różniczkowania automatycznego i tworzenie niestandardowych algorytmów uczenia.
  * Funkcje TensorFlow i grafy (w tym śledzenie i narzędzie Autograph).
* Rozdział 13. Wczytywanie i przetwarzanie wstępne danych za pomocą modułu TensorFlow (nowy rozdział)
  * Interfejs danych.
  * Skuteczne wczytywanie i zapistywanie danych za pomocą obiektów TFRecord.
  * Pisanie niestandardowych warstw przetwarzania wstępnego, korzystanie z warstw przetwarzania wstępnego Keras, kodowanie cech kategorialnych i tekstu, korzystanie z wektorów gorącojedynkowych, modelu worka słów, algorytmy TF-IDF lub wektorów właściwościowych.
  * Przegląd projektów TF Transform i TF Datasets.
  * Przeniesiono ogólną implementację sieci neuronowej do ćwiczeń.
  * Usunięto szczegóły dotyczące kolejek i czytników, które są teraz zarządzane za pomocą interfejsu danych. 
* Rozdział 14. Głębokie widzenie komputerowe za pomocą splotowych sieci neuronowych
  * Dodano architektury Xception i SENet.
  * Dodano implementację modelu ResNet-34 w interfejsie Keras.
  * Zaprezentowano sposób korzystania z gotowych modeli za pomocą interfejsu Keras.
  * Dodano całościowy przykład uczenia transferowego.
  * Dodano klasyfikowanie i lokalizowanie.
  * Wprowadzono sieci FCN.
  * Wprowadzono wykrywanie obiektów za pomocą architektury YOLO.
  * Wprowadzono segmentację semantyczną za pomocą struktury R-CNN.
* Rozdział 15. Przetwarzanie sekwencji za pomocą sieci rekurencyjnych i splotowych
  * Dodano wprowadzenie do sieci Wavenet.
  * Przeniesiono opis architektury koder-dekoder i dwukierunkowych sieci rekurencyjnych do rozdziału 16.
* Rozdział 16. Przetwarzanie języka naturalnego za pomocą sieci rekurencyjnych i mechanizmów uwagi (nowy rozdział)
  * Wyjaśniono sposób przetwarzania danych sekwencyjnych za pomocą interfejsu danych.
  * Zaprezentowano całościowy przykład generowania tekstu za pomocą znakowej sieci rekurencyjnej, zarówno za pomocą bezstanowych, jak i stanowych sieci RNN.
  * Zaprezentowano całościowy przykład analizy sentymentów za pomocą komórek LSTM.
  * Wyjaśniono mechanizm maskowania w interfejsie Keras.
  * Pokazano sposób wielokrotnego używania gotowych wektorów właściwościowych za pomocą TF Hub.
  * Pokazano sposób tworzenia modelu koder-dekoder w zadaniach neuronowego uczenia maszynowego za pomocą projektów TensorFlow Addons/seq2seq.
  * Wprowadzono przeszukiwania wiązkowe.
  * Wyjaśniono mechanizmy uwagi.
  * Dodano krótki przegląd wizualnych mechanizmów uwagi i wprowadzonbo uwagę na temat wyjaśnialności.
  * Wprowadzno architekturę transformatora, bazującą całkowicie na mechanizmach uwagi, w tym również pozycyjne wektory właściwościowe i wieloblokowe mechanizmy uwagi. 
  * Dodano przegląd modeli językowych (2018).
* Rozdział 17. Uczenie reprezentacji za pomocą autokoderów i generatywnych sieci przeciwstawnych
  * Dodano autokodery splotowe i rekurencyjne.
  * Dodano generatywne sieci przeciwstawne, w tym podstawowe sieci GAN, głębokie splotowe sieci GAN oraz modele StyleGAN.
* Rozdział 18. Uczenie przez wzmacnianie
  * Dodano podwójne sieci DQN, walczące sieci DQN i priorytetyzowane odtwarzanie doświadczeń.
  * Wprowadzono bibliotekę TF Agents.
* Rozdział 19. Wielkoskalowe uczenie i wdrażanie modeli TensorFlow (w większości nowy rozdział)
  * Eksploatowanie modelu TensorFlow za pomocą serwera TF Serving i platformy GCP.
  * Wdrażanie modelu do urządzenia mobilnego lub wbudowanego za pomocą biblioteki TFLite.
  * Używanie procesorów GPU do przyspieszania obliczeń.
  * Uczenie modeli w wielu urządzeniach jednocześnie za pomocą interfejsu strategii rozpraszania.

## Przejście z wersji TF 1 do wersji TF 2
Przejście z wersji TensorFlow 1.x do 2.0 przypomina proces przechodzenia z wersji Python 2 do 3. Przede wszystkim należy... oddychać. Nie spiesz się. Moduł TensorFlow 1.x nie zostanie porzucany tak szybko, masz czas.

* Należy rozpocząć od uaktualnienia do najnowszej wersji TensorFlow 1.x (w czasie czytania notatnika będzie to prawdopodobnie wersja 1.15).
* Przenoś jak największą ilość kodu za pomocą wyspecjalizowanych interfejsów API, albo tf.keras lub interfejsu estymatorów. Ten drugi będzie działał w module, ale od teraz powinieneś bardziej koncentrować się na bibliotece Keras, ponieważ twórcy modułu TF oznajmili, że Keras jest preferowanym interfejsem i prawdopodobnie będą wkładać więcej wysiłku w jego usprawnianie. Lepiej również korzystać z warstw przetwarzania wstępnego Keras (zob. rozdział 13.) niż z `tf.feature_columns`.
* Jeżeli w Twoim kodzie są wykorzystywane wyłącznie wyspecjalizowane interfejsy API, proces migracji będzie znacznie ułatwiony, ponieważ powinien działać tak samo w najnowszym wydaniu TF 1.x, jak w wersji TF 2.0.
* Pozbądź się wszelkich zastosowań `tf.contrib`, ponieważ nie będzie z nich użytku w TF 2.0. Niektóre części tej klasy zostały przeniesione do głównego interfejsu API, inne trafiły do oddzielnych projektów, a jeszcze inne nie były w ogóle utrzymywane i zostały po prostu usunięte. W razie potrzeby musisz zainstalować odpowiednie biblioteki lub skopiować stary kod `tf.contrib` do własnego projektu (jako ostatnią deskę ratunku).
* Napisz jak największą liczbę testów, dzięki temu proces migracji stanie się łatwiejszy i bezpieczniejszy.
* Możesz uruchomić kod z wersji TF 1.x w module TF 2.0 poprzez rozpoczęcie programu wierszami `import tensorflow.compat.v1 as tf` i `tf.disable_v2_behavior()`.
* Gdy już będziesz gotowy do migracji, możesz uruchomić [skrypt aktualizacji](https://www.tensorflow.org/beta/guide/upgrade) `tf_upgrade_v2`.

Więcej informacji na temat migracji znajdziesz w [poradniku TensorFlow](https://www.tensorflow.org/beta/guide/migration_guide).
