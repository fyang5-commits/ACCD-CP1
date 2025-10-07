    const cards = document.querySelectorAll('.card');
    const logEl = document.getElementById('log');
    const resetBtn = document.getElementById('resetBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');

    let flippedCards = [];
    let clickCount = 0;

    const fortunes = [
      { title: "The Path Opens", text: "Something you have been avoiding becomes simple once you take the first tiny step today." },
      { title: "Helpful Stranger", text: "A short message or comment gives you the exact hint you needed. Be ready to follow up." },
      { title: "Make It Real", text: "Write the idea down and ship a tiny version. Momentum beats perfection right now." }
    ];

    function flipCard(card) {
      const cardId = card.getAttribute('data-id');
      card.classList.toggle('is-flipped');
      clickCount++;

      if (card.classList.contains('is-flipped')) {
        flippedCards.push(cardId);
      } else {
        flippedCards = flippedCards.filter(id => id !== cardId);
      }

      if (flippedCards.length === 0) {
        logEl.textContent = 'No card chosen yet.';
      } else if (flippedCards.length === 1) {
        logEl.textContent = `You revealed card ${flippedCards[0]}. Clicks: ${clickCount}`;
      } else if (flippedCards.length === 2) {
        logEl.textContent = `Two cards are open. Clicks: ${clickCount}`;
      } else {
        logEl.textContent = `All three cards are open. Clicks: ${clickCount}`;
      }
    }

    cards.forEach(card => {
      card.addEventListener('click', function() {
        flipCard(this);
      });
    });

    resetBtn.addEventListener('click', () => {
      cards.forEach(card => card.classList.remove('is-flipped'));
      flippedCards = [];
      clickCount = 0;
      logEl.textContent = 'No card chosen yet.';
    });

    shuffleBtn.addEventListener('click', () => {
      const shuffled = [...fortunes].sort(() => Math.random() - 0.5);
      cards.forEach((card, index) => {
        const back = card.querySelector('.back');
        back.querySelector('h3').textContent = shuffled[index].title;
        back.querySelector('p').textContent = shuffled[index].text;

        // Tiny wiggle animation
        card.classList.remove('wiggle');
        void card.offsetWidth; // trigger reflow
        card.classList.add('wiggle');
      });

      cards.forEach(card => card.classList.remove('is-flipped'));
      flippedCards = [];
      clickCount = 0;
      logEl.textContent = 'Cards shuffled! Pick one again.';
    });