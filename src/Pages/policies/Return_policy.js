import React from 'react'
import "../../Styles/ReturnPolicy.css"
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
const ReturnPolicy = () => {
  return (
    <div>
      <Navbar></Navbar>
    <div class="body">
        <p class="return_policy_title">
        Customer satisfaction is important to us, so please take the time to familiarize yourself with our returns and exchange policy.
        </p>
        <div class="return_policy_paragraph">
        <p class="return_policy_subtitle">
        All orders are professionally handled and packed to avoid any damage during delivery.
        </p>
        <p class="return_policy_instruction">
        Has a problem that would have stopped someone from buying the item if they had known about it
        </p>
        <p class="return_policy_instruction">
        Is unsafe
        </p>
        <p class="return_policy_instruction">
        Is significantly different from the sample or description
        </p>
        <p class="return_policy_instruction">
        Doesn’t do what we said it would, or what you asked for and can’t be easily fixed.
        </p>
        </div>

        <div class="return_policy_paragraph">
        <p class="return_policy_subtitle">
        If the problem with the item is not of a major nature as detailed above any refund or replacement will be at our discretion.
        </p>
        <p class="return_policy_subtitle">
        All returns are subject to the following conditions being met:
        </p>
        <p class="return_policy_instruction">
        In all circumstances, proof of purchase must be retained and provided when requested for us to consider refunds or replacements.
        </p>
        <p class="return_policy_instruction">
        We ask that you notify us by emailing love@tuyya.com or our contact form within 24 hours of delivery time if the item has been damaged or there is a problem with the item.
         Please include all details about the item, proof of purchase, and full details of the problem. We may request a photo of the item and its original packaging.
        </p>
        <p class="return_policy_instruction">
        Where we deem it possible that a refund or replacement may be necessary, we may ask for the item to be returned for our inspection. We will then issue you with a return authority. No item can be returned without an authority being issued. 
        All shipping costs to return the item is to be paid by you and if your claim is successful we will reimburse capped shipping costs at standard CANADA Post rates.
        </p>
        <p class="return_policy_instruction">
        Any authorized return must be received within 14 days of a return authority being issued.
        </p>
        <p class="return_policy_instruction">
        Goods must be returned in original packaging, unless we advise otherwise, securely wrapped and with the return authority attached.
        </p>
        <p class="return_policy_instruction">
        If upon inspection of the returned item we deem the cause of the problem to be due to fair wear and tear, misuse, failure to use the item as per manufacturer’s instructions,
         using the item in a way that it was never intended to be used for or you have failed to take reasonable we may reject any claim for item refund, item replacement or refund of shipping costs.
        </p>
        <p class="return_policy_instruction">
        Refunds, replacement or shipping refunds will not be considered until we receive the item when a return authority has been issued.
        </p>
      </div>
      <div class="return_policy_paragraph">
        <p class="return_policy_subtitle">
        You acknowledge and agree that:
        </p>
        <p class="return_policy_instruction">
        if you do not comply with any aspect of the returns process specified as above, you will be deemed to have accepted delivery of the item and you will not be entitled to have your item repaired or replaced and you will not be entitled to a refund;
        </p>
        <p class="return_policy_instruction">
        the return of defective Goods will only be accepted by TUYYA if the Goods are in the same packaging used to deliver the Goods to you and are in the same condition as when originally delivered to you;
        </p>
        <p class="return_policy_instruction">
        GS' acceptance of the return of defective Goods is not an acknowledgment of any fault by TUYYA or of any breach of the Terms & Conditions by TUYYA and is not an acceptance of or a granting of credit to you;
        </p>
        <p class="return_policy_instruction">
        while TUYYA uses all reasonable endeavours to ensure that the packaging used by its delivery agents prevents damage being caused to your items during delivery to you, TUYYA is not liable for any damage caused during delivery and is entitled to refuse to replace or repair any such damaged Goods.
         You are able to purchase delivery insurance from the Website.
        </p>
        </div>
      
    </div>
    <Footer></Footer>
    </div>
  )
}

export default ReturnPolicy
