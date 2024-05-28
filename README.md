### Założenia projektowe

Jedna ze znanych marek płatków śniadaniowych prowadzi wieloletnią współpracę z wytwórnią filmów Disney, do której od niedawna należą także Gwiezdne Wojny.
W ramach kolejnej akcji promocyjnej wasz zespół został poproszony o przygotowanie Proof of Concept aplikacji związanej ze Star Wars.
Po wstępnym rozpoznaniu i analizie biznesowej podjęto decyzję o przygotowaniu quizu sprawdzającego znajomość uniwersum Gwiezdnych Wojen.
Ma to być aplikacja webowa działająca w przeglądarce, bez potrzeby instalacji.

Projekt: https://www.figma.com/design/ewQAn2TnFKpRLPr1mfVyn2/CodersCamp2020.Project.JavaScript.StarWarsQuiz-(Copy)?node-id=256-107&t=6Nq0icp4wN4nV0Il-1
Może się przydać do odczytania np. cieni i kolorów. Nie zwracajcie uwagi na jednostki w px, należy użyć jednostek responsywnych.

Dostarczona została także lista funkcjonalności.

1. Wybór trybu quizu (People, Vehicles, Spaceships)
2. Opis zasad dla quizu. Obok zasad pokazuje się losowe zdjęcie z danego trybu (dostosowany opis, jeśli np. imię osoby ze zdjęcia jest w opisie zasad).
3. Po rozpoczęciu gry rozpoczyna się odliczanie czasu (2 minuty).
4. Zadaniem gracza jest odpowiedzieć na jak najwięcej pytań w ciągu ustalonego czasu (dodatkowo gracz konkuruje także z komputerem! Komputer tak samo jak gracz próbuje rozpoznać co jest na grafice).
5. W trakcie trwania quizu miecz świetlny pokazuje, ile jeszcze czasu zostało. Po wybraniu odpowiedzi zostaje ukazane przez sekundę czy odpowiedź była dobra czy zła. Następnie pytanie zostaje zmienione na kolejne (prototyp pokazuje jedynie 1 pytanie) i tak do końca czasu.
6. Pytania są generowane w następujący sposób:
   - zostaje pobrany losowy zasób z danego trybu (np people o id 5)
   - zostanie pobrane dla wylosowanego zasobu zdjęcie
   - losowane są 3 odpowiedzi z zapytania do StarWars API. Dla trybu "People" będzie to: https://swapi.co/api/people (jedna brana jest z wcześniej wylosowanego, musi być poprawna)
7. Po ukończeniu czasu wynik gracza zapisywany jest w rankingu dla danej przeglądarki (LocalStorage) i pokazywany jest ranking 3 najlepszych wyników.

Waszym zadaniem będzie zaimplementować aplikację, aby działała wg wymagań klienta, a także przygotować i wykonać
wersję responsywną aplikacji (dostosowaną do wyświetlania na Tabletach i Telefonach — możecie przygotować najpierw projekt interfejsu, lub od razu przejść do implementacji).
W celu zaprezentowania działania aplikacja musi być możliwa do odwiedzenia w internecie.
Klient nie chce ponosić za to żadnych dodatkowych kosztów, dlatego należy wykorzystać jedną z usług oferujących darmowe
uruchomienie takiej aplikacji (np. GitHub Pages).
Klient wymaga także, aby aplikacja nie tylko działała, ale była odpowiednio pokryta testami.
Naprawdę macie szczęście co do klienta! Wielu uważa testy za niepotrzebne i jedynie stratę pieniędzy.
A co znaczy „odpowiednio pokryta”? To już należy właśnie ustalić z samym Klientem :)
Wszelkie nieścisłości w wymaganiach powinien wyjaśniać Product Owner wraz z Klientem.

## Możliwe usprawnienia i dodatkowe funkcjonalności:

- Wykorzystanie Speech Recognition API i wyszukiwanie odpowiedzi, jaką gracz wypowiedział zamiast klikania w przycisk z odpowiedzią.
- Rozbudowanie ustawień gry o możliwość wyboru czasu na rozgrywkę.
- Wykonanie testów E2E, przy użyciu odpowiedniego narzędzia, np. Cypress.
- elementy widoku (DOM) można testować wg Guide: https://testing-library.com/docs/dom-testing-library/example-intro
