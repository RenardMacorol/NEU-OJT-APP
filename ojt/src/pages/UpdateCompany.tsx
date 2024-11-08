import React from "react";
import EditCompanyButton from "../components/updateCompanyComponents/EditCompanyButton";
import SaveButton from "../components/updateCompanyComponents/SaveButton";
import CompanyContact from "../components/updateCompanyComponents/CompanyContact";
import CompanyAddress from "../components/updateCompanyComponents/CompanyAddress";
import CompanyNameField from "../components/updateCompanyComponents/CompanyNameField";
import SearchCompany from "../components/updateCompanyComponents/SearchCompany";

const UpdateCompany = () => {
    return (
        <div className="text-center ">
            <CompanyNameField />
            <CompanyAddress />
            <CompanyContact />
            <div className="flex-col text-center p-4">
                <EditCompanyButton />
                <SaveButton />
                <EditCompanyButton />
                <SearchCompany />
            </div>
        </div>
    )
}

export default UpdateCompany;
