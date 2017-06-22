import md5 from 'md5';

const gravatarHelper = {
    getAvatar: (email) => {
        if (!email)
            return '';

        return `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}`;
    }
};

export default gravatarHelper;
