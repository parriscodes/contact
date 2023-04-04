import Head from "next/head";
import Announcement from "../components/Announcement";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CarriersAgreement = () => {
  return (
    <div>
      <Head>
        <title>LandSeaAir Inc. - Carriers Agreement</title>
        <meta
          name="description"
          content="Our industry standard carriers agreement. Reach out to us today to find out more about our carriers agreement and what you can do to become a member!"
        ></meta>
        <link rel="icon" href="/delivery-truck.ico" />
      </Head>

      {/* Announcement */}
      <Announcement />
      {/* Navbar */}
      <Navbar />

      {/* Agreement Section */}
      <div className="carrier-container1">
        <div className="carrier-container2">
          <div className="carrier-container3">
            <div className="carrier-container4">
              <h1 className="carrier-heading">
                CARRIER CONTRACT
              </h1>
              <h2>Last Updated: July 19th, 2021</h2>
              <u>
                <p className="carrier-subheading">
                  Broker Agreement
                </p>
              </u>
            </div>
          </div>
          <div className="relative">
            <svg
              className="carrier-pattern1"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="carrier-pattern2"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="carrier-container5">
              <div className="carrier-container6">
                <p><b className="text-black">WITNESSETH</b></p>
                <br />
                <p>
                  <b>WHEREAS</b>, Carrier is duly authorized by the Federal Highway
                  Administration to engage In operations In interstate and
                  foreign commerce as a Contract Carrier, by motor vehicle, over
                  irregular routes, in License No MC-_______ desires to
                  participate In the transportation of such freight as is
                  tendered to Carrier by Broker, and
                </p>
                <br />
                <p>
                  <b>BROKER</b> is a duly licensed Motor Carrier Broker, licensed to
                  arrange for the transportation of property by license No
                  MC-553101 and controls the transportation of the commodities
                  to be tendered to CARRIER, not therefore agree as follows:
                </p>
                <br />

                <br />
                <ul className="pl-6">
                  <li className="carrier-list">
                    <b>BROKER</b> agrees to offer shipment and CARRIER agrees to
                    transport by motor vehicle from and to such points between
                    which service may be required such quantities of authorized
                    commodities as the BROKER may require, subject to the
                    availability of suitable equipment.
                  </li>
                  <li className="carrier-list">
                    <b>BROKER</b> agrees to tender to CARRIER for shipment a multiple
                    quantity of loads per year for each year this Agreement
                    remains in effect.
                  </li>
                  <li className="carrier-list">
                    <b>SUCH</b> transportation to be accomplished in accordance with
                    the rates and charges and other provisions as set forth in
                    the Broker's "confirmation of contract carrier verbal rate
                    agreement".
                  </li>
                  <li className="carrier-list">
                    <b>CARRIER</b> authorizes Freight Broker to invoice Shipper,
                    receiver, consignor or consignee for freight charges as
                    agent for and on behalf of carrier. Payment of the freight
                    charges to Freight Broker shall relieve Shipper, receiver,
                    consignor or consignee of any liability to the Carrier for
                    non-payment of charges.
                  </li>
                  <li className="carrier-list">
                    <b>RATES</b> may be established or amended verbally in order to
                    meet specific shipping schedules as mutually agreed, and
                    must be supported by a new "confirmation of contract carrier
                    verbal rate agreement".
                  </li>
                  <li className="carrier-list">
                    <b>CARRIER</b> shall maintain public liability, property damage and
                    cargo insurance at all times, with at least the minimum
                    coverage of $100,000 cargo insurance and $750,000 combined
                    single limit liability and property damage insurance per
                    incident on each vehicle. CARRIER will provide BROKER with a
                    certificate of insurance carrier reflecting the required
                    coverage and naming the BROKER as an additional Insured.
                  </li>
                  <li className="carrier-list">
                    <b>CARGO</b> shall be picked up at point(s) of origin and delivered
                    at point(s) of destination and delivery shall be made by
                    CARRIER as specified in the Bill of Lading or other shipping
                    documents, which shall be picked up with the cargo
                    transported and shall be completed upon delivery at point of
                    destination to reflect the fact of deliver. CARRIER shall
                    provide a completed Bill of Lading to BROKER accompanying
                    the freight bill. Each Bill of Lading and freight bill shall
                    contain the dispatch number assigned to each shipment by
                    BROKER at time of dispatch. Any paperwork not sent in to
                    BROKER within a 6 month period of delivery will no longer be
                    considered for payment. CARRIER settlements will be made by
                    BROKER in net 30 days from point when BROKER receives
                    original paperwork.
                  </li>
                  <li className="carrier-list">
                    <b>ALL</b> of the rules as to filing of claims and setting of
                    claims, and all the requirements as to public liability and
                    property damage insurance and cargo insurance that pertain
                    to the CARRIER as a common carrier, shall be equally
                    applicable to the CARRIER on shipments moving under this
                    Agreement.
                  </li>
                  <li className="carrier-list">
                    <b>CARRIER</b> shall be liable for loss or damage to any property
                    transported under this Agreement. Such liability shall begin
                    at the time cargo is loaded upon CARRIERS equipment at point
                    of origin and continue until said cargo is delivered to the
                    designated consignee at destination or to any intermediate
                    stop-off party. CARRIER shall promptly handle and attempt,
                    in good faith, to resolve any claims for which claims are
                    submitted either by BROKER or directly by proper claimant
                    for loss or damage to any cargo which is transported by
                    CARRIER.
                  </li>
                  <li className="carrier-list">
                    <b>IT</b> is understood and agreed that CARRIER and its employees,
                    sub-haulers, lease drivers and the like are not employees of
                    BROKER. CARRIER will provide adequate Workers Compensation
                    Insurance for its employees in accordance with statutory
                    limits and will have its insurance company maintain a
                    certificate of insurance reflecting the required coverage on
                    file with BROKER at all times. Said certificate shall name
                    BROKER as a certificate holder.
                  </li>
                  <li className="carrier-list">
                    <b>CARRIER</b> agrees to defend, indemnify and hold BROKER and
                    BROKER's corporate affiliates and their respective officers
                    and employees harmless from and against all claims,
                    liability and expense for loss or damage to property and/or
                    injury to or death of persons including CARRIER's employees
                    and agents, arising out of, or incident to, or in connection
                    with CARRIER's performance of this contract.
                  </li>
                  <li className="carrier-list">
                    <b>CARRIER</b> shall not subcontract or assign any portion of their
                    duties to transport shipments contemplated by this
                    contracted.
                  </li>
                  <li className="carrier-list">
                    <b>CARRIER</b> shall file a copy of his ICC permits with broker and
                    will keep such filings current. CARRIER specifically
                    warrants that its ICC Authority is sufficient to allow
                    CARRIER to transport all shipments accepted from BROKER to
                    its destination.
                  </li>
                  <li className="carrier-list">
                    <b>IN</b> the event CARRIER falls to render service satisfactory to
                    BROKER and/or its customers, BROKER reserves the right to
                    hire other truckers necessary to assure prompt and efficient
                    service to its customers. Nothing contained herein shall
                    limit BROKERS right to hire additional carriers from time to
                    time as it sees fit at its sole discretion.
                  </li>
                  <li className="carrier-list">
                    <b>THE</b> relationship of the CARRIER to BROKER shall, at all
                    times, be that of an Independent Contractor.
                  </li>
                  <li className="carrier-list">
                    <b>CARRIER</b> agrees it will support and protect BROKER's efforts
                    under this contract by refraining from soliciting any
                    customers or shippers of BROKER during the term of this
                    contract and for six (6) months thereafter.
                  </li>
                  <li className="carrier-list">
                    <b>THIS</b> contract may be terminated by either party by giving
                    the other 30 days prior written notice of the date of
                    termination. Rights of the parties accrued during the term
                    hereof, shall not be affected by any termination hereof. Any
                    notices given pursuant to this contract shall be deemed to
                    have been received by the other party by the mailing
                    thereof, by Certified Mail, addressed to such party at their
                    principal business address.
                  </li>
                  <li className="carrier-list">
                    <b>THIS</b> contract shall remain in effect until canceled by
                    either party from the date hereof and set forth. Either
                    party has the right to end this agreement and cancel or
                    terminate this contract at any time by the thirty (30) day
                    notice-previously stipulated herein.
                  </li>
                </ul>
                <br />
                <p>
                  <b>IN WITNESS WHEREOF</b>, the parties hereto have executed these
                  presents the day and year first hereinabove written.
                </p>
                <br />
                <p className="text-[#027d46]">LAND, SEA, AIR INC</p>
                <p>348 Shipyard Blvd.</p>
                <p>Wilmington, NC 28412</p>
                <p>Phone: 910-707-0904</p>
                <p>Email: cbennett@landseaair-nc.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CallToAction */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CarriersAgreement;
