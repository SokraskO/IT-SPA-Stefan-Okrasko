APLIKACJA JS SPA
Przedstawiona aplikacja pozwala:
1) Przeglądać dostępne pokoje oraz zabiegi na listach
2) Przeglądać głębiej dłuższy opis pokoju lub zabiegu
3) Dodawać zabiegi i pokoje do koszyka zachowanego w local-storage
4) Wyświetlać koszyk na dwa sposoby:
    - po kliknięciu w ikonę koszyka wyświetla koszyk interaktywny w z którego możemy usuwać niechciane wybrane przez nas wcześniej elementy, wybrać datę przyjazdu (nie wcześniejsza niż dany dzień) i datę wyjazdu (nie poźniejsza niż rok od danego dnia) oraz przejść do "demowej" strony "Realizacji zamówienia". W danym momencie dane z daty przyjazdu i wyjazdu nie są przekazywane dalej razem z "realizacją zamówienia".
    - po najechaniu na ikonę koszyka wyświetla małe okienko koszyka "szybkiego podglądu" jego zawartości. To okno nie posiada możliwości moderacji zawartości
5) Powrócić do strony głównej poprzez kliknięcie przycisku "FUTURE IT SPA"

Odświeżanie strony nie usuwa zawartości koszyka. Małe okno podglądu koszyka aktualizuje swoje wartości na bazie local-storage.


Aby uruchomić aplikację lokalnie należy uruchomić w zakładce NPM Scripts start:db (json-server), a następnie start:app


# IT-SPA-Stefan-Okrasko
