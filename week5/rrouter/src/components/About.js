import React from "react";
import "../style/about.css";
import tictactoe from "../assets/tictactoe.png";
// About section
const About = () => {
  return (
    <main className="about-container container">
      <section>
        <h1 className="about-Header">What's tic-tact-toe</h1>
        <div className="about-flex-container">
          <p className="align-firstP">
            {" "}
            Tic-tac-toe is a paper-and-pencil game for two players who take
            turns marking the spaces in a three-by-three grid with X or O. The
            player who succeeds in placing three of their marks in a horizontal,
            vertical, or diagonal row is the winner. It is a solved game, with a
            forced draw assuming best play from both players.
          </p>
          <img id="tictactoeImg" src={tictactoe} alt="" />
        </div>
      </section>
      <hr className="horizontalLine" />
      <section>
        <h1 className="about-Header">Gameplay</h1>
        <ol>
          <li>The game is played on a grid that's 3 squares by 3 squares.</li>
          <li>
            You are X, your friend (or the computer in this case) is O. Players
            take turns putting their marks in empty squares.
          </li>
          <li>
            The first player to get 3 of her marks in a row (up, down, across,
            or diagonally) is the winner.
          </li>
          <li>
            When all 9 squares are full, the game is over. If no player has 3
            marks in a row, the game ends in a tie.
          </li>
        </ol>
      </section>
      <hr className="horizontalLine" />
      <section>
        <h1 className="about-Header">Strategy</h1>
        <h4 className="about-Header">
          How to win tic tac toe when you go first
        </h4>
        <p>
          When you&#8217;re the first one up, there is a simple strategy on how to win
          tic tac toe: put your &#8217;X&#8217; in any corner. This move will pretty much
          send you to the winner&#8217;s circle every time, so long as your opponent
          doesn&#8217;t put their first &#8217;O&#8217; in the center box. This can make it harder
          to win, but it can happen.
        </p>
        <h4 className="about-Header">
          How to win tic tac toe when you go second
        </h4>
        <p>
          If you&#8217;re the second to go, it may be harder to win the game. If your
          opponent takes the center space, counteract that by placing your
          letter in a corner. If your opponent takes a corner space, take the
          middle space. This will force a draw in both cases. Winning is almost
          impossible unless a major mistake is made by your opponent. But, if
          your opponent starts on an edge that is not a corner, you can win.
          There is an exact science on how to win tic tac toe if this is the
          case: Put your first letter in the center. You can only claim victory
          if your opponent puts their letter on the other edge. If not, you will
          have to settle for a draw
        </p>
      </section>
    </main>
  );
};

export default About;
