class TaggingManager {
    constructor(setProgress, navigate, getUserFromUsername, toast) {
        this.setProgress = setProgress;
        this.navigate = navigate;
        this.getUserFromUsername = getUserFromUsername;
        this.toast = toast;
    }
    openUsername = async (username) => {
        try {
            this.setProgress(30);
            const { data } = await this.getUserFromUsername(username);
            console.log(data);
            if (data.result) {
                this.navigate(`/public-profile/${data.result._id}`);
                this.setProgress(100);
            } else {
                this.toast.error(data.message);
                this.setProgress(100);
            }
        } catch (error) {
            this.toast.error(error.response.data.message);
            this.setProgress(100);
        }
    };
    openHashtag = (hashtag) => {
        console.log("#" + hashtag);
    };

    convert = (text) => {
        let x = text.split(" ").map((word) => {
            const wordWithOutTag = word.slice(1);

            if (word.startsWith("@") && word.slice(1).match(/^[a-z0-9]+$/i)) {
                word = (
                    <>
                        <span> </span>
                        <span
                            onClick={() => this.openUsername(wordWithOutTag)}
                            style={{
                                color: "blue",
                                cursor: "pointer",
                                fontWeight: "bold",
                                backgroundColor: "#e6f2ff",
                            }}
                        >
                            {word}
                        </span>
                    </>
                );
            } else if (
                word.startsWith("#") &&
                word.slice(1).match(/^[a-z0-9]+$/i)
            ) {
                word = (
                    <>
                        <span> </span>
                        <span
                            onClick={() => this.openHashtag(wordWithOutTag)}
                            className="hashTag"
                            style={{
                                color: "violet",
                                cursor: "pointer",
                                fontWeight: "bold",
                                backgroundColor: "#e6f2ff",
                            }}
                        >
                            {word}
                        </span>
                    </>
                );
            } else {
                word = <span> {word}</span>;
            }
            return word;
        });
        return x;
    };
}

export default TaggingManager;
