import { useEffect } from "react";
import visitorService from "../services/visitorService";
import { useHistory } from "react-router-dom";

export default function useVisitorKey() {
  const history = useHistory();
  useEffect(() => {
    const visitorKey = visitorService.getVisitor();
    //   If Visitor Logged in
    console.log("Visitor", visitorKey);
    if (visitorKey.key) {
      return history.push("/visitor/checkin");
    } else {
      return;
    }
  }, [history]);
}
