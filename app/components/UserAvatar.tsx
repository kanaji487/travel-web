import Image from 'next/image';
import React from 'react'

interface UserAvatarProps {
    imageUrl: string | null;
}

const UserAvatar = ({ imageUrl }: UserAvatarProps) => {
  return (
    <div className="avatar-container">
      {imageUrl ? (
        <Image src={imageUrl} alt="User Avatar" className="" width={500} height={500} />
      ) : (
        <div className="avatar-placeholder">No Avatar</div>
      )}
    </div>
  )
}

export default UserAvatar;