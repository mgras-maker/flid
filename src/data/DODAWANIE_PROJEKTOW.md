# Instrukcja dodawania nowych projektów

Ten dokument zawiera szczegółowe wskazówki dotyczące dodawania nowych projektów do strony internetowej.

## 1. Przygotowanie zdjęć

Przygotuj zdjęcia dla nowego projektu:

1. **Zdjęcie główne** - używane w karcie projektu na stronie głównej
   - Sugerowane proporcje: 4:3, 16:9 lub 3:4
   - Optymalna rozdzielczość: około 800x600px (dla 4:3)
   - Format pliku: .jpg lub .webp (preferowany - lepszy stosunek jakości do rozmiaru)

2. **Zdjęcia galerii** - używane na stronie szczegółów projektu
   - Co najmniej 3 zdjęcia wysokiej jakości
   - Spójne proporcje dla wszystkich zdjęć (np. wszystkie 4:3)

3. **Optymalizacja zdjęć**:
   - Użyj narzędzia takiego jak [TinyPNG](https://tinypng.com/) lub [Squoosh](https://squoosh.app/) do optymalizacji
   - Docelowa wielkość plików: 100-300KB dla zdjęć głównych, do 500KB dla galerii

## 2. Dodawanie plików zdjęć

1. Stwórz folder dla projektu (jeśli jeszcze nie istnieje):
   ```
   public/projects/[nazwa-projektu]/
   ```

2. Umieść zdjęcia w odpowiednich lokalizacjach:
   - Zdjęcie główne: `public/projects/[nazwa-projektu].jpg`
   - Zdjęcia galerii: `public/projects/[nazwa-projektu]/gallery-1.jpg`, `gallery-2.jpg`, itd.

## 3. Dodawanie do karty projektów (strona główna)

1. Otwórz plik `src/data/projectCardsData.ts`

2. Dodaj nowy obiekt projektu do tablicy `projectCardsData`:

```typescript
{
  id: 11, // Zwiększ o 1 względem ostatniego projektu
  title: 'Nazwa Twojego Projektu',
  description: 'Krótki opis projektu, 1-2 zdania, pokazujący najważniejsze aspekty.',
  imageUrl: './projects/nazwa-projektu.jpg', // WAŻNE: użyj './projects/...' a nie '/projects/...'
  link: '/projects/nazwa-projektu', // Unikalny URL projektu
  aspectRatio: '4/3' // Wybierz odpowiednie proporcje: '1/1', '4/3', '3/4', '16/9', '2/3', '3/2'
}
```

## 4. Dodawanie szczegółów projektu

1. Otwórz plik `src/data/projectsData.ts`

2. Dodaj nowy obiekt projektu do obiektu `projectsData`:

```typescript
'nazwa-projektu': {
  title: 'Nazwa Projektu',
  subtitle: 'Krótkie określenie typu projektu',
  description: 'Szczegółowy opis projektu, 2-3 zdania, może zawierać więcej szczegółów.',
  client: 'Nazwa klienta lub organizacji',
  duration: 'Czas trwania projektu, np. "12 miesięcy"',
  year: '2024-2025',
  location: 'Lokalizacja projektu',
  categories: ['Kategoria 1', 'Kategoria 2', 'Kategoria 3'], // wybierz z istniejących lub stwórz nowe
  coverImage: './projects/nazwa-projektu.jpg', // WAŻNE: użyj './projects/...' a nie '/projects/...'
  gallery: [
    './projects/nazwa-projektu/gallery-1.jpg',
    './projects/nazwa-projektu/gallery-2.jpg',
    './projects/nazwa-projektu/gallery-3.jpg',
  ],
  challenge: 'Opis wyzwania, które projekt miał rozwiązać. Jedno lub dwa akapity tekstu.',
  approach: [
    {
      phase: 'Empathy',
      description: 'Opis fazy empatii w procesie projektowania.',
      outcome: 'Rezultat tej fazy.'
    },
    {
      phase: 'Reasoning',
      description: 'Opis fazy rozumowania w procesie projektowania.',
      outcome: 'Rezultat tej fazy.'
    },
    {
      phase: 'Materialization',
      description: 'Opis fazy materializacji w procesie projektowania.',
      outcome: 'Rezultat tej fazy.'
    }
  ],
  results: [
    'Rezultat 1: konkretny, mierzalny rezultat projektu',
    'Rezultat 2: kolejny ważny rezultat',
    'Rezultat 3: jeszcze inny rezultat projektu',
    'Rezultat 4: możesz dodać więcej punktów wedle potrzeby'
  ],
  testimonial: {
    quote: "Cytat od klienta lub użytkownika opisujący pozytywne doświadczenia z projektem.",
    author: 'Imię i Nazwisko',
    title: 'Stanowisko, Nazwa Organizacji'
  },
  nextProjects: ['projekt-1', 'projekt-2'] // ID innych projektów jako powiązane (używaj istniejących ID)
}
```

## 5. Sprawdzenie i testowanie

1. Uruchom serwer deweloperski: `npm run dev`
2. Sprawdź, czy karta projektu wyświetla się poprawnie na stronie głównej
3. Kliknij na kartę projektu i sprawdź, czy strona szczegółów projektu wyświetla się poprawnie
4. Sprawdź, czy wszystkie zdjęcia ładują się poprawnie i wyglądają dobrze w różnych rozmiarach ekranu

## 6. Dodawanie projektu do nawigacji (opcjonalne)

Jeśli projekt jest szczególnie ważny i powinien być dostępny bezpośrednio z menu nawigacyjnego:

1. Otwórz plik `src/components/layout/Navbar.tsx`
2. W miejscu, gdzie definiowane są linki do projektów, dodaj nowy link:

```typescript 
<Link to="/projects/nazwa-projektu" className="nav-link">Nazwa Projektu</Link>
```

## Ważne uwagi

- Wszystkie ścieżki do plików w folderze `public` powinny zaczynać się od `./` (np. `./projects/nazwa-projektu.jpg`) gdy używane są w komponentach React
- Zachowaj spójny schemat nazewnictwa projektów (kebab-case, bez polskich znaków)
- Upewnij się, że ID projektu użyte w `projectsData` jest takie samo jak nazwa w ścieżce URL
- Przed wdrożeniem sprawdź, czy wszystkie zdjęcia są odpowiednio zoptymalizowane, aby zapewnić szybkie ładowanie strony
