import { useEffect, useState, useCallback } from "react";
import "./App.css";

const CitizenCropper = () => {
  const [imageUrl, setImageUrl] = useState<string>("https://crypto-citizens-mainnet.s3.amazonaws.com/4000028.png");

  const handleCitizenChange = () => {
    draw();
  };

  const draw = useCallback(() => {
    var img = new Image();
    img.src = imageUrl;

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    if (!canvas) {
      console.error("[ERROR] Unable to find canvas element");
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("[ERROR] Unable to find canvas context");
      return;
    }

    const sourceX = 700;
    const sourceY = 50;
    const sourceWidth = 1000;
    const sourceHeight = 1000;

    // Draw slice
    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, 600, 600);
  }, [imageUrl]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Welcome to Citizen Cropper. Enter the desired citizen image URL below.</p>
        <p>If you need to get your citizen image URL, you can retrieve it from the artblocks API:</p>
        <p>{"https://token.artblocks.io/<CONTRACT>/<TOKEN_ID>"}</p>
        <small>
          Created by{" "}
          <a href="https://www.github.com/gitpancake" style={{ textDecoration: "none", color: "grey" }}>
            gitpancake
          </a>
        </small>
        <br />
        <small>
          sauce:{" "}
          <a href="https://github.com/gitpancake/citizen-cropper" style={{ textDecoration: "none", color: "grey" }}>
            github
          </a>
        </small>
      </div>
      <div style={{ padding: "20px" }}>
        <input type="text" onChange={(e) => setImageUrl(e.target.value)} />

        <button onClick={() => handleCitizenChange()}>Update</button>
      </div>

      <div className="canvas">
        <canvas id="canvas" width="600" height="600"></canvas>
      </div>
    </div>
  );
};

export default CitizenCropper;
