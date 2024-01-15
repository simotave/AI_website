import React, {useState} from 'react';
import './App.css';
import Intestazione from'./Intestazione';
import Elenco from "./Elenco";
import Intro from "./Intro";
import dati from "./data";

function Page() {


}

function App() {
  let [filter, setFilter] = useState("");
  return (
      <div>
        <img
            src="img/Copertina.jpg"
            alt="Immagine di copertina"
            style={{ width: '100%', height: '100%' }}
        />
    <Intestazione filtro={filter} modificaFiltro={setFilter}/>
    <Intro/>
    <Elenco dati={dati.filter( s=> s.title.includes(filter))}/>
          <table border="2" style={{margin: "50px"}}>
              <thead>
              <tr> <th></th><th>Quality of the Result (from 1 to 5)</th> <th>Configurability and Control</th> <th>API Integration</th> <th>Price</th> </tr>
              </thead>
              <tbody>
              <tr> <td>DALL-E 3</td> <td>5</td> <td>There are no tools in the free version, with the paid version you can take full advantage of Chat gpt to improve images</td> <td>YES</td><td>ChatGPT Plus: from $20/month, also customization for innovative companies looking to scale securely. Free with Bing Image Creator </td></tr>
              <tr> <td>DreamStudio</td> <td>4</td> <td>There are tools for image editing before and after the generative process, but they are very limited</td> <td>YES, Stability.Ai API</td><td>Free for 25 credits, starting at $10 for 1,000 credits</td> </tr>
              <tr> <td>Playground</td> <td>3</td> <td>With the board and canva functionalities it is possible to act a lot on the images created with filters and subsequent modifications</td> <td>NO</td> <td>Free to create 500 images per day and to use images commercially. From $12 to $36 for Pro and Turbo versions</td></tr>
              <tr> <td>Firefly</td> <td>5</td><td>At a photography post-production level, Adobe is certainly a valid professional solution, in fact the images can be modified both at the filter level, but also at the photographic level by modifying the parameters of the virtual camera (focal aperture, shutter speed, lens type, etc...)</td> <td>NO</td> <td>Starting with 25 generative credits. Premium Plan: $19.99/month, part of the Creative Cloud Photography Plan</td> </tr>
              <tr> <td>Canva AI</td> <td>4</td> <td>In terms of editing tools, in this case Canva is very limited, also because artificial intelligence for generating images is not the main tool within the website</td> <td>NO, but Magic Studio have one</td> <td>Free Plan: Allows up to 50 free image generations. Canva Pro Plan: $10 per month ($119.99 annually or $14.99 monthly) for 500 image generations per user.
              </td></tr>
              <tr> <td>Leonardo.Ai</td> <td>3</td> <td>In this case there are many models for generating images and each of these has different tools. Changing these varies the number of credits used.</td> <td>YES</td><td>Free 150 fast tokens, resets once per day. Plans from $10 to $48/month</td> </tr>
              <tr> <td>Midjourney</td> <td>X, reading the reviews about it, it is among the best image generators in terms of quality.</td> <td>X</td> <td>NO</td> <td>From $10 / month up to $120 / month</td></tr>
              </tbody>
          </table>
    <p className={"conclusion"}>
        In conclusion, for those seeking to explore and gain experience in the realm of AI generative image creation, the utilization of free options such as Bing Image Creator proves to be an excellent starting point. It provides an opportunity to grasp the potential of advanced models like DALL-E 3. Additionally, platforms like Playground and Leonardo offer valuable insights into a spectrum of tools that can enhance the generated images, including different models, dimensions, filters, styles, and even the incorporation of negative prompts.
        <br /> While free tools serve well for introductory exploration, transitioning to professional use may warrant the adoption of paid options like Midjourney, FireFly, and DALL-E 3 in ChatGPT. These premium tools not only deliver visually superior results but also exhibit a closer resemblance to the intended prompts. Investing in such platforms offers users a heightened level of control and precision, ultimately leading to a more refined and satisfying generative image creation experience.
    </p>

      </div>
  );
}


export default App;
