import React from "react"
import './StatusBar.scss'

export default function StatusBar() {
    return (
        <div id="status-bar">
            <div className="notify">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z" fill="#A098AE" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ position: "absolute", top: "10px", right: "10px" }}>
                    <circle cx="4" cy="4" r="4" fill="#4D44B5" />
                </svg>
            </div>
            <div className="notify">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12.2631 2.66667L11.4167 6.46615C10.9353 6.69779 10.4752 6.96458 10.0339 7.26563L6.32035 6.09636L2.58337 12.5703L5.39848 15.1484C5.28849 15.9648 5.33831 16.3672 5.39848 16.8516L2.58337 19.4297L6.32035 25.9037L10.0339 24.7344C10.4752 25.0354 10.9353 25.3022 11.4167 25.5339L12.2631 29.3333H19.737L20.5834 25.5339C21.0647 25.3022 21.5249 25.0354 21.9662 24.7344L25.6797 25.9037L29.4167 19.4297L26.6016 16.8516C26.6246 16.5682 26.6664 16.2845 26.6667 16C26.6678 15.7069 26.6216 15.4108 26.6016 15.1484L29.4167 12.5703L25.6797 6.09636L21.9662 7.26563C21.5249 6.96458 21.0647 6.69779 20.5834 6.46615L19.737 2.66667H12.2631ZM14.4037 5.33334H17.5964L18.2552 8.29167L18.9167 8.55209C19.6649 8.84512 20.3644 9.24846 20.9922 9.75001L21.5495 10.1927L24.4401 9.28386L26.0365 12.0495L23.8021 14.099L23.9089 14.8021C24.0346 15.5797 24.0101 16.4746 23.9089 17.1979L23.8021 17.901L26.0365 19.9505L24.4401 22.7162L21.5495 21.8073L20.9922 22.25C20.3644 22.7516 19.6649 23.1549 18.9167 23.4479L18.2552 23.7083L17.5964 26.6667H14.4037L13.7448 23.7083L13.0834 23.4479C12.3351 23.1549 11.6357 22.7516 11.0079 22.25L10.4506 21.8073L7.55994 22.7162L5.96358 19.9505L8.19796 17.901L8.09119 17.1979C7.96095 16.4046 7.98095 15.4967 8.09119 14.8021L8.19796 14.099L5.96358 12.0495L7.55994 9.28386L10.4506 10.1927L11.0079 9.75001C11.6357 9.24846 12.3351 8.84512 13.0834 8.55209L13.7448 8.29167L14.4037 5.33334ZM16 10.6667C13.0703 10.6667 10.6667 13.0703 10.6667 16C10.6667 18.9297 13.0703 21.3333 16 21.3333C18.9298 21.3333 21.3334 18.9297 21.3334 16C21.3334 13.0703 18.9298 10.6667 16 10.6667ZM16 13.3333C17.4886 13.3333 18.6667 14.5115 18.6667 16C18.6667 17.4886 17.4886 18.6667 16 18.6667C14.5115 18.6667 13.3334 17.4886 13.3334 16C13.3334 14.5115 14.5115 13.3333 16 13.3333Z" fill="#A098AE" />
                </svg>
            </div>
            <div className="info">
                <div className="name">
                    Nabila A.
                </div>
                <div className="role">
                    Admin
                </div>
            </div>
            <div className="avatar">

            </div>
        </div>
    )
}