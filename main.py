from flask import Flask, redirect, render_template
import os
from googleapiclient.discovery import build

PEOPLE_FOLDER = os.path.join('static')

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = PEOPLE_FOLDER

def youtubesearch(genre):
    youtube = build('youtube','v3',developerKey = 'AIzaSyBN2vqZwnQOB4VRgf1Nvh_COeYPGwEPmlk')
    request = youtube.search().list(q=genre,part='snippet',type='video',eventType='live')
    res = request.execute()
    for item in res['items']:
        video_id = item["id"]["videoId"]
    return video_id

@app.route("/")
def home():
    lofi_path = os.path.join(app.config['UPLOAD_FOLDER'], 'lofi.jpg')
    lofibeats_path = os.path.join(app.config['UPLOAD_FOLDER'], 'lofibeats.jpg')
    love_path = os.path.join(app.config['UPLOAD_FOLDER'], 'love.jpg')
    pop_path = os.path.join(app.config['UPLOAD_FOLDER'], 'pop.jpg')
    rap_path = os.path.join(app.config['UPLOAD_FOLDER'], 'rap.jpg')
    sad_path = os.path.join(app.config['UPLOAD_FOLDER'], 'sad.jpg')
    slow_path = os.path.join(app.config['UPLOAD_FOLDER'], 'slow.jpg')
    nature_path = os.path.join(app.config['UPLOAD_FOLDER'], 'nature.jpg')
    rock_path = os.path.join(app.config['UPLOAD_FOLDER'], 'rock.png')
    return render_template("Home/Home.html", lofi=lofi_path, lofibeats=lofibeats_path,
                           love=love_path, pop=pop_path, rap=rap_path,
                           sad=sad_path, slow=slow_path, nature=nature_path, rock=rock_path,
                           lofibeat_id=youtubesearch('lofi beats'), lofisong_id=youtubesearch('lofi songs'),
                           Slow_and_Reverb_id=youtubesearch('Slow and Reverb'),
                           Lovemashup_id=youtubesearch('love mashup'), Sadmashup_id=youtubesearch('Sad mashup'),
                           Rap_id=youtubesearch('Rap'), Pop_id=youtubesearch('Pop'), Rock_id=youtubesearch('Rock'),
                           Naturesound_id=youtubesearch('Nature sound'))

@app.route("/lofisongs")
def lofisongs():
    return render_template("Selecao/index.html")



if __name__ == "__main__":
    app.run(debug=True)