import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
//import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { reviews } from "./reviews";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ReviewCard = ({ name, occupation, review }) => {
  return (
    <Card>
      <CardContent>
        <div>
          {/* User Image */}
          <h5 className="text-h5 mt-3 font-medium">{name}</h5>
          <h6 className="text-h6 font-normal">{occupation}</h6>
        </div>
        <Divider />
        <p className="text-p">{review}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default function Testimonials() {
  return (
    <Box sx={{ minWidth: 275 }}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name="Name"
            occupation="Occupation"
            review={review.text}
          />
        ))}
    </Box>
  );
}

// export const Card = () => {
//   return (
//     <a
//       href="#"
//       className="block max-w-sm h-fit p-6 bg-cmwhite border border-cmblue rounded-xl shadow hover:bg-gray-100 dark:bg-cmdark dark:border-cmblue dark:hover:bg-cmdark"
//     >
//       <h5 className="mb-2 text-h5 font-bold tracking-tight text-cmdark dark:text-cmwhite">
//         Noteworthy technology acquisitions 2021
//       </h5>
//       <p className="font-normal text-cmdark dark:text-cmgrey">
//         Here are the biggest enterprise technology acquisitions of 2021 so far,
//         in reverse chronological order.
//       </p>
//     </a>
//   );
// };

// export const CardTwo = () => {
//   return (
//     <div className="max-w-sm h-fit bg-cmwhite border border-cmblue rounded-xl shadow dark:bg-cmdark dark:border-cmblue">
//       <a href="#">
//         <img
//           className="rounded-t-lg"
//           src="/docs/images/blog/image-1.jpg"
//           alt=""
//         />
//       </a>
//       <div className="p-5">
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cmwhite">
//             Noteworthy technology acquisitions 2021
//           </h5>
//         </a>
//         <p className="mb-3 font-normal text-cmgrey dark:text-cmgrey">
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.
//         </p>
//         <FilledBtn
//           url="#"
//           title="Læs mere"
//           icon={
//             <svg
//               className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           }
//         />
//       </div>
//     </div>
//   );
// };
