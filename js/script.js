// Audio Player Functions

function togglePlay(audioId, button) {
    const audio = document.getElementById(audioId);
    const icon = button.querySelector('div');
    
    if (audio.paused) {
        audio.play();
        icon.className = 'pause-icon';
    } else {
        audio.pause();
        icon.className = 'play-icon';
    }
}

function updateProgress(audioId) {
    const audio = document.getElementById(audioId);
    const progressBar = document.getElementById('progress' + audioId.slice(-1));
    const currentTime = document.getElementById('current' + audioId.slice(-1));
    
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
    
    currentTime.textContent = formatTime(audio.currentTime);
    
    if (audio.ended) {
        const button = document.querySelector(`#${audioId}`).parentElement.querySelector('.play-button');
        button.querySelector('div').className = 'play-icon';
    }
}

function seekAudio(event, audioId) {
    const audio = document.getElementById(audioId);
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * audio.duration;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update duration when audio loads
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.audio-element').forEach(audio => {
        audio.addEventListener('loadedmetadata', function() {
            const id = this.id.slice(-1);
            const durationElement = document.getElementById('duration' + id);
            if (durationElement) {
                durationElement.textContent = formatTime(this.duration);
            }
        });
    });
});
