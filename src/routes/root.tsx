import { Form, Link, NavLink, Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from "../contact";
import { useEffect, useState } from "react";


export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}

const personalizedNewsFeeds = [
  { id: 1, label: "Daily Digest", value: "daily_digest" },
  { id: 2, label: "Trending Topics", value: "trending_topics" },
  { id: 3, label: "Tech Updates", value: "tech_updates" },
  { id: 4, label: "Entertainment Buzz", value: "entertainment_buzz" },
  { id: 5, label: "Business Insider", value: "business_insider" },
  { id: 6, label: "Health Highlights", value: "health_highlights" },
  { id: 7, label: "Science Scoop", value: "science_scoop" },
  { id: 8, label: "Sports Spotlight", value: "sports_spotlight" },
  { id: 9, label: "Lifestyle Trends", value: "lifestyle_trends" },
  { id: 10, label: "World News Roundup", value: "world_news_roundup" },
  { id: 11, label: "Fashion Focus", value: "fashion_focus" },
  { id: 12, label: "Foodie Finds", value: "foodie_finds" },
  { id: 13, label: "Travel Tales", value: "travel_tales" },
  { id: 14, label: "Art Adventures", value: "art_adventures" },
  { id: 15, label: "Music Mania", value: "music_mania" },
  { id: 16, label: "Automotive Updates", value: "automotive_updates" },
  { id: 17, label: "Home & Garden Guide", value: "home_and_garden_guide" },
  { id: 18, label: "Pet Palooza", value: "pet_palooza" },
  { id: 19, label: "Finance Focus", value: "finance_focus" },
  { id: 20, label: "Politics Pulse", value: "politics_pulse" }
];


export default function Root() {

  const navigation = useNavigation();




  return (
    <>

      <div id="sidebar">
        <h1>InsightFeed</h1>
        <nav>
          {personalizedNewsFeeds.length ? (
            <ul>
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <h4>Personalized news feeds</h4>
              <button type="submit" style={{
                position: "relative",
              }}>Feed<span style={{
                position: 'absolute',
                right: 3,
                bottom: 20
              }}>+</span></button>
              </div>
              {personalizedNewsFeeds.map((feed) => (
                <li key={feed?.id} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10
                }}>
                  <NavLink
                    to={`feeds/${feed?.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                    style={{
                      display: "flex",
                      flex: 1
                    }}
                  >
                    {feed.label ? (
                      <>
                        {feed.label}
                      </>
                    ) : (
                      <i>No Feeds</i>
                    )}
                  </NavLink>
                  <div>
                    <Link to={"/"}>
                      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z" stroke="#4A5568" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}>
        <div id="navbar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Entertainment</Link></li>
              <li><Link to="/">Technology</Link></li>
              <li><Link to="/">Business</Link></li>
            </ul>
          </nav>
        </div>
        <div
          id="detail"
          className={
            navigation.state === "loading" ? "loading" : ""
          }
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}