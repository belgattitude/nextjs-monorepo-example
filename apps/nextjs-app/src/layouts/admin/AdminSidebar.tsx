import { useSession } from 'next-auth/react';
import type { FC } from 'react';
import { TextAvatar } from '@/components/avatar/TextAvatar';

export const AdminSidebar: FC = () => {
  // const { data: session, status } = useSession();
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="flex flex-row sm:gap-10">
      <div className="sm:w-full sm:max-w-72">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
          <section className="sidebar-title items-center p-4">
            <svg
              fill="none"
              height="42"
              viewBox="0 0 32 32"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="100%" rx="16" width="100%"></rect>
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <div className="flex flex-col">
              <span>Acme</span>
              <span className="text-xs font-normal text-content2">
                Team Plan
              </span>
            </div>
          </section>
          <section className="sidebar-content">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                <span className="menu-title">Main menu</span>
                <ul className="menu-items">
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>General</span>
                  </li>

                  <li className="menu-item menu-active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Teams</span>
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Billing</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="menu-1"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-1"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Account</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item menu-item-disabled ml-6">
                          Change Email
                        </label>
                        <label className="menu-item ml-6">Profile</label>
                        <label className="menu-item ml-6">
                          Change Password
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <div className="divider my-0"></div>
              <section className="menu-section px-4">
                <span className="menu-title">Settings</span>
                <ul className="menu-items">
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 21l18 0"></path>
                      <path d="M3 10l18 0"></path>
                      <path d="M5 6l7 -3l7 3"></path>
                      <path d="M4 10l0 11"></path>
                      <path d="M20 10l0 11"></path>
                      <path d="M8 14l0 3"></path>
                      <path d="M12 14l0 3"></path>
                      <path d="M16 14l0 3"></path>
                    </svg>
                    Payments
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                      <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
                    </svg>
                    Balances
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                    </svg>
                    Customers
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 10l5 -6l5 6"></path>
                      <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
                      <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    </svg>
                    Products
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="menu-2"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-2"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-75"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                          <path d="M9 7l4 0"></path>
                          <path d="M9 11l4 0"></path>
                        </svg>
                        <span>Contracts</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item menu-item-disabled ml-6">
                          Create contract
                        </label>
                        <label className="menu-item ml-6">All contracts</label>
                        <label className="menu-item ml-6">
                          Pending contracts
                        </label>
                        <label className="menu-item ml-6">Security</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section className="sidebar-footer justify-end bg-gray-2 pt-2">
            <div className="divider my-0"></div>
            <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
              <label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4">
                <div className="flex flex-row gap-4 p-4">
                  <div className="avatar-square avatar avatar-md">
                    {user === undefined ? null : (
                      <TextAvatar name={user.name ?? 'Demo User'} />
                    )}
                    {/* <img src={user?.image ?? } alt="avatar" /> */}
                  </div>

                  <div className="flex flex-col">
                    <span>
                      {user?.name} {user?.email}
                    </span>
                  </div>
                </div>
              </label>
              <div className="dropdown-menu dropdown-menu-right-top ml-2">
                <a className="dropdown-item text-sm">Profile</a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Account settings
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Change email
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Subscriptions
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Change password
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Refer a friend
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Settings
                </a>
              </div>
            </div>
          </section>
        </aside>
      </div>
      <div className="flex w-full flex-col p-4">
        <div className="w-fit">
          <label
            htmlFor="sidebar-mobile-fixed"
            className="btn btn-primary sm:hidden"
          >
            Open Sidebar
          </label>
        </div>

        <div className="my-4 grid grid-cols-2 gap-4">
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>

          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
        </div>
      </div>
    </div>
  );
};
