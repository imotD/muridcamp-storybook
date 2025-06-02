import React from 'react';

interface UserProfileCardProps {
    name: string;
    avatarUrl?: string;
    bio?: string;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({ name, avatarUrl, bio }) => {
    return (
        <div style={{ border: '1px solid #eee', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
            {avatarUrl && (
                <img
                    src={avatarUrl}
                    alt={`Avatar for ${name}`}
                    style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' }}
                />
            )}
            <h3>{name}</h3>
            {bio && <p style={{ fontSize: '14px', color: '#555' }}>{bio}</p>}
        </div>
    );
};