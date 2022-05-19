function changeTopic(god)
    {
        let info = document.getElementById("topic");
        info.innerHTML = "<h2 style='color: white;'>" + titles[god] + "</h2>" +
        "<img src='./img/gods/" + img[god]+ "' alt='picture of one of the 5 gods of Melee " + (god+1) + "' style='width: 280px;'/>" + "<p style='color: white;'>" + des[god] + "</p>"
    }

    const img = ["mew2king.png","mang0.jpg","armada.jpg","hungrybox.png","ppmd.jpg"]

    const titles = ["Jason Zimmerman (Mew2king)", "Joseph Marquez (Mang0)", "Adam Lindgren (Armada)", "Juan Debiedma (Hungrybox)", "Kevin Nanney (PPMD)"]

    const des = ['Jason "Mew2king" Zimmerman is a heavy combo and punish player, using his knownledge of knockback, percents and attack properties to gain an advantage on his enemy. He is likely the player who knows the most about the mechanics of the game. He mains three characters: Marth, Sheik, and Fox.', 
	'Joseph "Mang0" Marquez is a very aggressive player, constantly being in the face of the opposing player. His unorthodox and usually unsafe approach to the game has led to several upsets from lower ranked players, but these upsets are a rare occurrence. He mains two characters: Fox and Falco.',
	'Adam "Armada" Lindgren is known for his well-roundeded gameplay. However, he is most notorious for his punishes and edge-guarding, which he excelled in even though he exclusively played a relatively slow character with average range for most of his career. As of now, he is the only god who has given up competing. He mained two characters: Peach and Fox.', 
	'Juan "Hungrybox" Debiedma is known for his highly defensive playstyle, which was especially present at the start of his career. He tends to wait for his opponent to mess up during an approach and then punishes them for it. He mains one character: Jigglypuff.', 
	'Kevin "PPMD" Nanney is known for having the best neutral in the game. Due to the way he moves his characters, he can hit his opponents with ease, but they will have difficulty hurting him back. He mains two characters: Marth and Falco.']