import { Card } from "@salesforce/design-system-react";
import * as React from "react";
import { ReactElement } from "react";

export interface ContactProps {
  contacts: any[];
  contactIds: string;
  error: string;
}

export function Contacts(props: ContactProps): ReactElement {
  if (props.error) {
    return <div>{props.error}</div>;
  }

  return (
    <Card heading="Selected Contacts" bodyClassName="slds-p-horizontal_small">
      {contactList(props)}
    </Card>
  );
}

function contactList(props: ContactProps) {
  return props.contacts
    ? props.contacts.map((c) => (
        <div>
          <a href={`/${c.Id}`}>
            {c.Name} ({c.Email})
          </a>
        </div>
      ))
    : null;
}
